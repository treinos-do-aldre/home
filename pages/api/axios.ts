import axios from 'axios'
import { GetServerSidePropsContext } from 'next'
// import { parseCookies } from 'nookies'
import { environment } from '@environment'

export function getAPIClient(ctx?: GetServerSidePropsContext) {
//   const { 'buymeaccesstoken.token': token } = parseCookies(ctx)

  const api = axios.create({
    baseURL: environment.apiUrl
  })

//   api.interceptors.request.use((config) => {
//     if (token && config && config.headers) {
//       config.headers['X-Access-Token'] = token
//     }

//     return config
//   })

//   if (token) {
//     api.defaults.headers['X-Access-Token'] = token
//   }

  return api
}

export const api = getAPIClient()