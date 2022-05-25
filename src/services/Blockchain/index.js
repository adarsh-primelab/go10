import { useQuery } from "react-query";
import { apiRoutes } from "../../constants/apiRoutes";
const { blockchain } = apiRoutes;

export const GetBlockchains = () => {
  const { url, method, query } = blockchain.get;
  // TODO: Need to impelmet useAxios hoook once api is ready
  return useQuery([query], () => blocks, {
    cacheTime: 0,
  });
};

const blocks = [
  {
    id: "#1",
    status: "Error",
  },
  {
    id: "#2",
    status: "Processing",
  },
  {
    id: "#3",
    status: "Processing",
  },
  {
    id: "#4",
    status: "Success",
  },
  {
    id: "#5",
    status: "Error",
  },
  {
    id: "#6",
    status: "Success",
  },
];
