import * as React from 'react'
import {  ChakraProvider, Box, Text, Image, Flex } from '@chakra-ui/react'
import './DesktopProyectos.css'
import notebook from '../../assets/img/notebook.svg'
import nyc from '../../assets/img/nyc.jpg'
import sfo from '../../assets/img/sfo.jpg'


function DesktopProyectos(){

    return(
        <ChakraProvider>
            <a name='proyectos'></a>
            <Box className="Proyectos" paddingBottom='100px'>
                <Box pl='200px' >
                        <Text py='10px' fontSize='1.2em'fontWeight={600}>Acerca de mis...</Text> 
                        <Text py='10px' color='red' fontSize='2.2em' letterSpacing={1} fontWeight={600} >Proyectos</Text>
                </Box>

                <Flex justifyContent='center' alignItems='center'>
                    
                    <Image boxSize='sm' src={notebook} w='50%'/>
                
                    <Flex justifyContent='center' alignItems='center' w='50%' wrap='wrap' direction='row' paddingRight='200' >
                        <Image className='proyImg' boxSize='240' src={nyc} m='4' borderRadius='8' opacity='0.8'/>
                        <Image className='proyImg' boxSize='240' src={sfo} m='4' borderRadius='8' opacity='0.8'/>
                        <Image className='proyImg' boxSize='240' src={sfo} m='4' borderRadius='8' opacity='0.8'/>
                        <Image className='proyImg' boxSize='240' src={nyc} m='4' borderRadius='8' opacity='0.8'/>
                    </Flex>

                </Flex>

            </Box>
        </ChakraProvider>       
    )    
}
    
export default DesktopProyectos;