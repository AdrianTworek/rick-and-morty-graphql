import { useQuery } from '@apollo/client'
import { GET_CHARACTERS } from '../api/actions/characters'
import { Character } from '../types/character'

import { Box, Typography } from '@mui/material'

import { CharactersList, QueryResult } from '../components'

const Characters = () => {
  const { data, error, loading } = useQuery(GET_CHARACTERS)

  return (
    <Box
      mt={10}
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h3" gutterBottom>
        Characters
      </Typography>

      <QueryResult<Character[]>
        data={data?.characters?.results.slice(0, 10)}
        loading={loading}
        error={error}
      >
        <CharactersList characters={data?.characters?.results.slice(0, 10)} />
      </QueryResult>
    </Box>
  )
}

export default Characters
