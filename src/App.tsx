import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import { Container } from '@mui/material'

import { CharacterDetails, Characters, Favorites } from './pages'
import { Navbar } from './components'

const App = () => {
  return (
    <>
      <Navbar />

      <Container>
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route
            path="/characters/:characterId"
            element={<CharacterDetails />}
          />
        </Routes>
      </Container>

      <ToastContainer />
    </>
  )
}

export default App
