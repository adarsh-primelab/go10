import { useQuery } from 'react-query'
import { apiRoutes } from '../../constants/apiRoutes'
const { blockchain } = apiRoutes

export const GetBlockchains = () => {
  const { url, method, query } = blockchain.get
  // TODO: Need to impelmet useAxios hoook once api is ready
  return useQuery(
    [query], () => blocks,
    {
      cacheTime: 0
    }
  )
}

const blocks = [
  {
    id: "#1 F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",
    status: 'Error',
  },
  {
    id: "#2 F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",
    status: 'Processing',
  },
  {
    id: "#3 F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",
    status: 'Processing',
  },
  {
    id: "#4 F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",
    status: 'Success',
  },
  {
    id: "#5 F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",
    status: 'Error',
  },
  {
    id: "#6 F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",
    status: 'Success',
  }
]
