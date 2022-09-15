import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://apiv3.apifootball.com/'
})
