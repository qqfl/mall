import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://www.test.api/',
    timeout: 2000
  });

  instance.interceptors.request.use(value => {
    return value;
  }, error => {
    console.log(error);
  });

  instance.interceptors.response.use(value => {
    return value.data;
  }, error => {
    console.log(error);
  });

  return instance(config)
}
