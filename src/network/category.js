import {request} from "@/network/request";

export function getCategoryType() {
  return request({
    url: 'home/categorytype'
  })
}
export function getCategoryData() {
  return request({
    url: 'home/categorydata'
  })
}
