export const apiRoutes = {
  dashboard: {
    get: {
      query: "dashboard",
      method: 'GET',
      url: 'dashboard'
    }
  },
  blockchain: {
    get: {
      query: "blockchain",
      method: 'GET',
      url: 'blockchain'
    }

  },
  nodes: {
    get: {
      query: "nodes",
      method: 'GET',
      url: 'nodes'
    }

  },
  wallets: {
    get: {
      query: "wallets",
      method: 'GET',
      url: 'wallets'
    },
    post: {
      query: "wallets_post",
      method: 'POST',
      url: 'wallets'
    }

  },
  transactions: {
    get: {
      query: "transactions",
      method: 'GET',
      url: 'transactions'
    },
    post: {
      query: "transactions_post",
      method: 'POST',
      url: 'transactions'
    }

  }
} 