import { useCallback } from 'react'
import axios from 'axios'

/**
 * Returns a function that can be used to call an API.
 * This function wraps the axios instance.
 */
export default () => {
  const callApi = useCallback(async ({ headers, ...rest }) => {
    try {
      const { data } = await axios({
        headers: {
          'Content-Type': 'application/json',
          ...headers
        },
        ...rest,
        validateStatus: (status) => status >= 200 && status <= 299
      })
      return data
    } catch (err) {
      // TODO: Implement toast message invoke for error messages
    }
  }, [])

  return callApi
}