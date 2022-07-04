import axiosClient from "./axiosConfig";

export function getNovelChapter(novel_code, chap_num) {
  return axiosClient
    .get(`chapters?_expand=novel&novel.id=${novel_code}&chap_num=${chap_num}`)
    .then((res) => res.data);
}
