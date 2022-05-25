import { useMutation, useQuery } from 'react-query'
import { apiRoutes } from '../../constants/apiRoutes'
const { transactions } = apiRoutes

export const GetTransactions = () => {
  const { url, method, query } = transactions.get

  return useQuery(
    [query], () => {
      // TODO: Need to impelmet useAxios hoook once api is ready
      const data = [];

      for (let i = 0; i < 12; i++) {
        data.push({
          key: i,
          address: `1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX ${i}`,
          format: "BASE58 (P2PKH)",
          transactions: "1,809",
          totalReceived: "29679.62842403 BTC",
          totalSent: "29679.34007776 BTC",
          finalBalance: "0.28834627 BTC"
        });
      }
      return data
    },
    {
      cacheTime: 0
    }
  )
}

export const AddTransactions = () => {
  // const { url, method, query } = wallets.get

  return useMutation(() => "data")
}