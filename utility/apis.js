import axiosClient from "./axiosConfig";

export function getRoyalRanking() {
  return axiosClient.get(`/novels`).then((res) => res.data);
}

export function getNovelChapter(novel_code, chap_num) {
  return axiosClient
    .get(`/chapters?_expand=novel&novelId=${novel_code}&chap_num=${chap_num}`)
    .then((res) => res.data);
}

export function getAllNovelChapters(novel_code, page = 1) {
  return axiosClient
    .get(
      `/chapters?_expand=novel&novelId=${novel_code}&_page=${page}&_limit=20`
    )
    .then((res) => res.data);
}
