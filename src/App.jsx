import React from 'react'
import './App.css'
import {  ChakraProvider, Box } from '@chakra-ui/react'
import MobileNav from './components/mobile/MobileNav'
import DesktopNav from './components/desktop/DesktopNav'
import DesktopHero from './components/desktop/DesktopHero'
import DesktopBotonera from './components/desktop/DesktopBotonera'
import DesktopPortfolio from './components/desktop/DesktopPortfolio'
import DesktopProyectos from './components/desktop/DesktopProyectos'


function App() {


  return (
    <ChakraProvider>
      <Box display={{base:'inline', md:'none'}}>
        <MobileNav />
      </Box>
      <Box display={{base:'none', md:'inline'}}>
        <DesktopNav />
        <DesktopHero />
        <DesktopBotonera />
        <DesktopPortfolio />
        <DesktopProyectos />
      </Box>
    </ChakraProvider>
  )
}

export default App
