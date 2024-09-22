import { sql } from "@vercel/postgres";

interface VideoType {
  id: number;
  title: string;
  contents: string;
  url: string;
  reg_id: string;
  rating: number;
}

interface AddVideoType {
  title: string;
  contents: string;
  url: string;
  reg_id: string;
  rating: number;
}

export async function getVideos() {
  const videos = await sql`select * from tb_video`;
  // console.log(videos);
  return { videos: videos.rows, rowCount: videos.rowCount };
}

export async function addVideo({
  title,
  contents,
  url,
  reg_id,
  rating,
}: AddVideoType) {
  try {
    // console.log({
    //   POSTGRES_URL: process.env.NEXT_PUBLIC_POSTGRES_URL,
    //   POSTGRES_URL_NON_POOLING:
    //     process.env.NEXT_PUBLIC_POSTGRES_URL_NON_POOLING,
    // });
    console.log("param:: ", { title, contents, url, reg_id, rating });
    const res =
      await sql`insert into tb_video(title, contents, url, reg_id, rating) values (${title}, ${contents}, ${url}, ${reg_id}, ${rating})`;
    // const res =
    // await sql`insert into tb_video values (1, ${title}, ${contents}, ${url}, ${reg_id}, now(), ${rating}, 0)`;
    console.log("res:: ", { res });

    return { rowCount: res.rowCount, command: res.command };
  } catch (e) {
    console.log(e);
    return { error: e };
  }
}
