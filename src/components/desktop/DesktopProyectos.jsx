import * as React from 'react'
import {  ChakraProvider, Box, Text, Image, Flex } from '@chakra-ui/react'
import './DesktopProyectos.css'
import notebook from '../../assets/img/notebook.svg'
import nyc from '../../assets/img/nyc.jpg'
import sfo from '../../assets/img/sfo.jpg'


function DesktopProyectos(){

    return(
        <ChakraProvider>
            <Box className="Proyectos">
                <Box pl='200px' >
                        <Text py='10px' fontSize='1.2em'fontWeight={600}>Acerca de mis...</Text> 
                        <Text py='10px' color='red' fontSize='2.2em' letterSpacing={1} fontWeight={600} >Proyectos</Text>
                </Box>

                <Flex justifyContent='center' alignItems='center'>
                    
                    <Image boxSize='sm' src={notebook} w='50%'/>
                
                    <Flex justifyContent='center' alignItems='center' w='50%' wrap='wrap' direction='row' paddingRight='100' >
                        <Image boxSize='250' src={nyc} m='4'/>
                        <Image boxSize='250' src={sfo} m='4'/>
                        <Image boxSize='250' src={sfo} m='4'/>
                        <Image boxSize='250' src={nyc} m='4'/>
                    </Flex>

                </Flex>

            </Box>
        </ChakraProvider>       
    )    
}
    
export default DesktopProyectos;