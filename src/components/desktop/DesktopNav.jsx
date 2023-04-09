import React from 'react'
import {  ChakraProvider, Box, Flex } from '@chakra-ui/react'
import './DesktopNavbar.css'

function DesktopNav() {


    return (
        <ChakraProvider>
        <Flex>
            <Box className="DesktopNavbar" p='20px' w='100%' bg='white' align='end'>
                <Box w='95%'>
                    <a href="">Home</a>
                    <a href="">Portfolio</a>
                    <a href="">Acerca de mi</a>
                    <a href="">Contacto</a>
                </Box>

            </Box>
        </Flex>
        </ChakraProvider>
    )
}

export default DesktopNav