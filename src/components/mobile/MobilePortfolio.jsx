import React from 'react'
import {  ChakraProvider, Box, Flex, Image, Text} from '@chakra-ui/react'
import './MobilePortfolio.css'
import tweet from '../../assets/img/tweet.png'
import marvel from '../../assets/img/marvel.png'
import pixel from '../../assets/img/pixel.png'



function MobilePortfolio(){

    return(
        <ChakraProvider >
            <Box className='Portfolio'>
            <Box pl='20px' className='Portfolio'>
                        <Text fontSize='0.8em'fontWeight={400}>Acerca de mis...</Text> 
                        <Text color='red' fontSize='1.4em'fontWeight={600} paddingBottom='10px'>Proyectos</Text>
            </Box>
            <Flex justifyContent='center' alignItems='center' direction='column' >
                        <Image className='proyImg' boxSize='60%' src={marvel} m='1' borderRadius='4'/>
                        <Image className='proyImg' boxSize='60%' src={tweet} m='1' borderRadius='4'/>
                        <Image className='proyImg' boxSize='60%' src={pixel} m='1' borderRadius='4'/>
                    </Flex>
            </Box>

        </ChakraProvider>
    )
}
export default MobilePortfolio;

