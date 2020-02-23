import {request} from "@/network/request";

export function getDetailData(id) {
  return request({
    url: 'home/detaildata',
    params: {
      id
    }
  })
}
