import * as React from 'react'
import {  ChakraProvider, Box, Text } from '@chakra-ui/react'
import './DesktopProyectos.css'



function DesktopProyectos(){

    return(
        <ChakraProvider>
            <Box className="Proyectos">
            <Box pl='200px' >
                        <Text py='10px' fontSize='1.2em'fontWeight={600}>Acerca de mis...</Text> 
                        <Text py='10px' color='red' fontSize='2.2em' letterSpacing={1} fontWeight={600} h='1000'>Proyectos</Text>
                </Box>

            </Box>
        </ChakraProvider>       
    )    
}
    
export default DesktopProyectos;