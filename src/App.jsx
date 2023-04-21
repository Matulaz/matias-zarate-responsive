import React from 'react'
import './App.css'
import {  ChakraProvider, Box } from '@chakra-ui/react'
import MobileNav from './components/mobile/MobileNav'
import DesktopNav from './components/desktop/DesktopNav'
import DesktopHero from './components/desktop/DesktopHero'
import DesktopBotonera from './components/desktop/DesktopBotonera'
import DesktopPortfolio from './components/desktop/DesktopPortfolio'
import DesktopProyectos from './components/desktop/DesktopProyectos'
import DesktopForm from './components/desktop/DesktopForm'
import DesktopFooter from './components/desktop/DesktopFooter'
import MobileHero from './components/mobile/MobileHero'
import MobilePortfolio from './components/mobile/MobilePortfolio'
import MobileForm from './components/mobile/MobileForm'


function App() {


  return (
    <ChakraProvider>
      <Box display={{base:'inline', md:'none'}}>
        <MobileNav />
        <MobileHero />
        <MobilePortfolio />
        <MobileForm />
        
      </Box>
      <Box display={{base:'none', md:'inline'}}>
        <DesktopNav />
        <DesktopHero />
        <DesktopBotonera />
        <DesktopPortfolio />
        <DesktopProyectos />
        <DesktopForm />
        <DesktopFooter />
      </Box>
    </ChakraProvider>
  )
}

export default App
