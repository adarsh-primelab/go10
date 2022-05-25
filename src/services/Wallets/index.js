import { useMutation, useQuery } from 'react-query'
import { apiRoutes } from '../../constants/apiRoutes'
const { wallets } = apiRoutes

export const GetWallets = () => {
  const { url, method, query } = wallets.get

  return useQuery(
    [query], () => {
      // TODO: Need to impelmet useAxios hoook once api is ready
      const data = [];
      for (let i = 0; i < 13; i++) {
        data.push({
          key: i,
          accountId: 'some account id ' + i,
          walletsId: `1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX${i}`,
          name: `test name. ${i}`,
        });
      }
      return data
    },
    {
      cacheTime: 0
    }
  )
}

export const AddWallet = () => {
  // const { url, method, query } = wallets.get

  return useMutation(() => "data")
}