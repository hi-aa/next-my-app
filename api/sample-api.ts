import { sql } from "@vercel/postgres";

interface VideoType {
  id: number;
  title: string;
  contents: string;
  url: string;
  // reg_id: string;
  rating: number;
}

interface AddVideoType {
  title: string;
  contents: string;
  url: string;
  // reg_id: string;
  rating: number;
}

interface TagType {
  tagId: number;
  videoId: number;
  tagNm: string;
}

/**
 * 목록 조회
 * @returns video list
 */
export async function getVideos() {
  // TODO: paging
  const videos = await sql`select * from tb_video`;
  return { videos: videos.rows, rowCount: videos.rowCount };
}

/**
 * 등록
 * @param AddVideoType 글정보
 * @param tagArr 태그목록
 * @returns
 */
export async function addVideo(
  { title, contents, url, rating }: AddVideoType,
  tagArr: Array<string>
) {
  // insert video
  const res =
    await sql`insert into tb_video(title, contents, url, reg_id, rating, rcmnd_cnt) values (${title}, ${contents}, ${url}, 'test', ${rating}, 0) RETURNING id`;
  const videoId = res.rows?.[0].id;

  // insert tag
  for (const tag of tagArr) {
    const tagres =
      await sql`insert into tb_tag(video_id, tag_nm, reg_id) values (${videoId}, ${tag}, 'test')`;
  }
  return { id: videoId, rowCount: res.rowCount, command: res.command };
}
