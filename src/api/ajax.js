import axios from "axios";

export function getData(url) {
  return new Promise((resolve, reject) => {
    axios({
      url
    }).then(result => {
      resolve(result)
    }).catch(err => {
      reject(err)
    })
  })
}