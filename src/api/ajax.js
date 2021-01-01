import axios from "axios";

export function getData() {
  return new Promise((resolve, reject) => {
    axios.get("/api/list").then(result => {
      resolve(result)
    }).catch(err => {
      reject(err)
    })
  })
}