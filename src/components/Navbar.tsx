import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

import { AppBar, Box, Toolbar, Typography } from '@mui/material'

type NavbarLinkProps = {
  to: string
  children: ReactNode
}

const NavbarLink = ({ to = '/', children }: NavbarLinkProps) => {
  return (
    <NavLink to={to} style={{ textDecoration: 'none' }}>
      {children}
    </NavLink>
  )
}

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      component="nav"
      sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
    >
      <Toolbar>
        <NavbarLink to="/">
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
            Rick and Morty
          </Typography>
        </NavbarLink>

        <Box sx={{ display: 'flex', gap: '1rem', ml: '3rem' }}>
          <NavbarLink to="/">
            <Typography sx={{ color: 'white' }}>Home</Typography>
          </NavbarLink>
          <NavbarLink to="favorites">
            <Typography sx={{ color: 'white' }}>Favorites</Typography>
          </NavbarLink>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
