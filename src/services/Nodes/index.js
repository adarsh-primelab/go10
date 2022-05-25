import { useQuery } from 'react-query'
import { apiRoutes } from '../../constants/apiRoutes'
const { nodes } = apiRoutes

export const GetNodes = () => {
  const { url, method, query } = nodes.get
// TODO: Need to impelmet useAxios hoook once api is ready
  return useQuery(
    [query], () => nodesData,
    {
      cacheTime: 0
    }
  )
}

const nodesData = [
  {
    id: "#1 F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",
    name: "Node name 1",
    ip: "10.20.30.102",
    status: 'Error',
  },
  {
    id: "#2 F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",
    name: "Node name 2",
    ip: "10.20.30.102",
    status: 'Processing',
  },
  {
    id: "#3 F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",
    name: "Node name 3",
    ip: "10.20.30.102",
    status: 'Processing',
  },
  {
    id: "#4 F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",
    name: "Node name 4",
    ip: "10.20.30.102",
    status: 'Success',
  },
  {
    id: "#5 F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",
    name: "Node name 5",
    ip: "10.20.30.102",
    status: 'Error',
  },
  {
    id: "#6 F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",
    name: "Node name 6",
    ip: "10.20.30.102",
    status: 'Success',
  }
]
