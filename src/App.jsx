import React from 'react'
import './App.css'
import {  ChakraProvider, Box } from '@chakra-ui/react'
import MobileNav from './components/mobile/MobileNav'
import DesktopNav from './components/desktop/DesktopNav'
import DesktopHero from './components/desktop/DesktopHero'


function App() {


  return (
    <ChakraProvider>
      <Box display={{base:'flex', md:'none'}}>
        <MobileNav />
      </Box>
      <Box display={{base:'none', md:'flex'}}>
        <DesktopNav />
        <DesktopHero />
      </Box>
    </ChakraProvider>
  )
}

export default App
