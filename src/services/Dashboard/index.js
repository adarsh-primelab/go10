import { useQueries } from 'react-query'
import { apiRoutes } from '../../constants/apiRoutes'
const { dashboard } = apiRoutes

export const Getdashboard = () => {
  const { url, method, query } = dashboard.get
// TODO: Need to impelmet useAxios hoook once api is ready
  return useQueries(
    [], () => {

    },
    {
      cacheTime: 0
    }
  )
}