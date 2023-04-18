import * as React from 'react'
import { ChakraProvider, Box, Center,Flex, Spacer, Grid, GridItem } from '@chakra-ui/react'
import './DesktopPortfolio.css'
import foto from '../../assets/img/foto2.png'
import ig from '../../assets/img/instagram.png'
import fb from '../../assets/img/facebook.png'
import gh from '../../assets/img/github.png'


function DesktopPortfolio(){

    return(

        <ChakraProvider>

                <Flex justifyContent={'center'} alignItems={'center'} className='Main' p='100px' >
                        <Box w='50%'>
                                <Box as='img' src={ foto } alt='matulaz'ps='30px' w='60%'/>
                        </Box>
                        <Box pe='100px' w='50%'>
                                <Box as='h1' color='red' fontWeight={'400'}>Acerca de mi..</Box>
                                <Box as='p' pt='10px'>Mi nombre es Matias, soy Desarrollador Web Fullstack y Psicologo. Comence mis estudios en Ingrenieria Industrial en la Universidad Nacional de Cordoba cuando termine el secundario, en este ambito academico tome mi primer contacto con la programacion y el diseño.
                                En 2020 me recibi como programador FullStack en Acamica,  luego como programador Front End con React JS en 2023 en la UTN-BA y actualmente estoy cursando un curso de programacion avanzado orientado al Back End con Node JS tambien en la UTN-BA. 
                                Ademas de esto hice cursos de diseño con illustrator y photoshop, extendiendo esto a Figma.
                                Tambien hice un curso de la UNC de infraestructura con AWS y cultura DevOps.
                                </Box>
                                <br/>
                                <Box as='h1' color='red' fontWeight={'400'} >Encuentrame en Redes..</Box>
                                <Flex pt='10px' alignItems={'center'} fontWeight={'200'}>
                                        <Box as='img' src={ ig } alt='instagram-matulaz' w='32px' ></Box>
                                        <Box as='p' p='10px'>@Matulaz</Box>
                                        <Box as='img' ml='10px' src={ fb } alt='instagram-matulaz' w='32px' ></Box>
                                        <Box as='p' p='10px'>Mati Zarate</Box>
                                        <Box as='img' ml='10px' src={ gh } alt='instagram-matulaz' w='32px' ></Box>
                                        <Box as='p' p='10px'>.com/matulaz</Box>
                                </Flex>
                        </Box>
                </Flex>







        </ChakraProvider>
        )    
}

export default DesktopPortfolio;