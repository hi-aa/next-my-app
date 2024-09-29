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
  // console.log("param:: ", { title, contents, url, reg_id, rating });
  const res =
    await sql`insert into tb_video(title, contents, url, reg_id, rating, rcmnd_cnt) values (${title}, ${contents}, ${url}, ${reg_id}, ${rating}, 0)`;
  console.log("res:: ", { res });

  return { rowCount: res.rowCount, command: res.command };
}
