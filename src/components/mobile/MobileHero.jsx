import React from 'react'
import {  ChakraProvider, Box, Flex, Image, Text} from '@chakra-ui/react'
import './MobileHero.css'
import perfilMobile from '../../assets/img/foto2.png'



function MobileHero (){



    return(
        <ChakraProvider className='MobileHero'>
            <Flex className='MobileHero' justifyContent={'center'} alignItems={'center'} pt='18%'>
                <Box>
                    <Text fontWeight={'700'} fontSize='1.8em'>Hi ! I'm <span className='span'>Mati</span></Text>
                    <Text color='red' fontWeight={'700'} fontSize='1.2em'>a Fullstack web Dev</Text>
                </Box>
                <Image  src={perfilMobile} boxSize='35%'/>
            </Flex>
        </ChakraProvider>
    )
}

export default MobileHero;