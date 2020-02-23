import {request} from "@/network/request";

export function getHomeMultiData() {
  return request({
    url: 'home/multidata'
  })
}

export function getHomeGoodsData(type, page) {
  return request({
    url: 'home/goodsdata',
    params: {
      type,
      page
    }
  })
}

export function getHomeFeatureData() {
  return request({
    url: '/home/featuredata'
  })
}
