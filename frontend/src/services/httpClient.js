import Axios from 'axios'
import store from '@/store'

const httpClient = Axios.create({
  baseURL: process.env.VUE_APP_URL,
  headers: { 'Authorization': 'Bearer ' + store.state.oidcStore.access_token }
})

export default httpClient
