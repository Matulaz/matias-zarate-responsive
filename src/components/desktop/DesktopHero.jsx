import * as React from 'react'
import { ChakraProvider, Box, Flex } from '@chakra-ui/react'
import './DesktopHero.css'
import foto from '../../assets/img/foto2.png'




function DesktopHero () {


    return (
        <ChakraProvider>
        <Flex className="Hero" pt='100px' h='800px' w='100%'>
            <Box className='HeroBox' flex w='100%' pt='150px' pl='200px'>
                <Box as='h1' className='txt-hero' fontWeight='700' fontSize='6em'>Hi! I'm <Box as='span' color='red'>Mati</Box></Box>
                <Box as='h3' className='txt-hero-span' fontWeight='700' fontSize='3.6em'>A Fullstack web Dev</Box>

                    <Flex pt='40px'>
                        <Box as='div' textAlign='start'>
                            <Box fontSize='1.2em' className='txt-hero' fontWeight='500' letterSpacing={0}>Email:</Box>
                            <Box fontSize='0.8em' className='txt-hero' fontWeight='400' letterSpacing={0}><Box as='a' p='0' href='mailto:matiaszarate.psi@gmail.com'>matiaszarate.psi@gmail.com</Box></Box>
                        </Box>

                        <Box ps='20' m='0'>
                            <Box fontSize='1.2em' className='txt-hero' fontWeight='500' letterSpacing={0}>Linkedin:</Box>
                            <Box fontSize='0.8em'className='txt-hero' fontWeight='400' letterSpacing={0}><Box as='a' p='0' href='https://www.linkedin.com/in/matias-zarate-648181271'>linkedin.com/matiaszarate</Box></Box>
                        </Box>
                    </Flex>

            </Box>
            <Box>
                <Box className='HeroImg' as='img' src={ foto } alt='matulaz' h='80%' me='500' />
            </Box>

        </Flex>
    </ChakraProvider>
    )
}

export default DesktopHero;
