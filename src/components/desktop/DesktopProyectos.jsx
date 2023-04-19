import * as React from 'react'
import {  ChakraProvider, Box, Text } from '@chakra-ui/react'
import './DesktopProyectos.css'



function DesktopProyectos(){

    return(
        <ChakraProvider>
            <Box className="Proyectos">
            <Box pl='100px' >
                        <Text py='5px' fontSize='1em'fontWeight={600}>Acerca de mis...</Text> 
                        <Text py='5px' color='red' fontSize='1.8em' letterSpacing={1} fontWeight={600} h='1000'>Proyectos</Text>
                </Box>

            </Box>
        </ChakraProvider>       
    )    
}
    
export default DesktopProyectos;