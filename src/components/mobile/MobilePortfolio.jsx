import React from 'react'
import {  ChakraProvider, Box, Flex, Image, Text} from '@chakra-ui/react'
import './MobilePortfolio.css'
import nyc from '../../assets/img/nyc.jpg'



function MobilePortfolio(){

    return(
        <ChakraProvider >
            <Box className='Portfolio'>
            <Box pl='20px' className='Portfolio'>
                        <Text fontSize='0.8em'fontWeight={400}>Acerca de mis...</Text> 
                        <Text color='red' fontSize='1.4em'fontWeight={600} paddingBottom='10px'>Proyectos</Text>
            </Box>
            <Flex justifyContent='center' alignItems='center' direction='column' >
                        <Image className='proyImg' boxSize='60%' src={nyc} m='1' borderRadius='8'/>
                        <Image className='proyImg' boxSize='60%' src={nyc} m='1' borderRadius='8'/>
                        <Image className='proyImg' boxSize='60%' src={nyc} m='1' borderRadius='8'/>
                    </Flex>
            </Box>

        </ChakraProvider>
    )
}
export default MobilePortfolio;

