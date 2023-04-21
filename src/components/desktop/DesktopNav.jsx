import React from 'react'
import {  ChakraProvider, Box, Flex } from '@chakra-ui/react'
import './DesktopNavbar.css'

function DesktopNav() {


    return (
        <ChakraProvider>
        <Flex>
            <Box className="DesktopNavbar" p='20px' w='100%' bg='white' align='end'>
                <Box w='95%'>
                    <a href=''>Home</a>
                    <a href="#proyectos">Proyectos</a>
                    <a href="#about">Acerca de mi</a>
                    <a href="#form">Contacto</a>
                </Box>

            </Box>
        </Flex>
        </ChakraProvider>
    )
}

export default DesktopNav