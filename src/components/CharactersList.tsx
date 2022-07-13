import { motion } from 'framer-motion'
import { Character } from '../types/character'

import { Stack } from '@mui/material'

import CharacterCard from './CharacterCard'

type CharacterProps = {
  characters: Character[]
}

const container = {
  hidden: { y: -15 },
  show: {
    y: 0,
    transition: {
      staggerChildren: 0.03,
    },
  },
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

const CharactersList = ({ characters }: CharacterProps) => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      gap={3}
      component={motion.ul}
      justifyContent="center"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {characters?.map((character: Character) => (
        <motion.li
          key={character.id}
          style={{ listStyle: 'none' }}
          variants={item}
        >
          <CharacterCard character={character} />
        </motion.li>
      ))}
    </Stack>
  )
}

export default CharactersList
