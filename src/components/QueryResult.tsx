import { Typography } from '@mui/material'

import Spinner from './Spinner'

type QueryResultProps<T> = {
  loading: Boolean
  error: any
  data: T
  children: JSX.Element
}

function QueryResult<T>({
  loading,
  error,
  data,
  children,
}: QueryResultProps<T>): JSX.Element {
  if (error) return <Typography variant="h6">Some error occurred...</Typography>

  if (loading) return <Spinner />

  if (!data) {
    return <Typography variant="h6">Nothing to show...</Typography>
  }

  return children
}

export default QueryResult
