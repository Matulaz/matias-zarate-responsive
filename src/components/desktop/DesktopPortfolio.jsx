import * as React from 'react'
import { ChakraProvider, Box, Progress ,Flex, Text, Button } from '@chakra-ui/react'
import { CalendarIcon, EmailIcon } from '@chakra-ui/icons'
import './DesktopPortfolio.css'
import foto from '../../assets/img/foto2.png'
import ig from '../../assets/img/instagram.png'
import fb from '../../assets/img/facebook.png'
import gh from '../../assets/img/github.png'


function DesktopPortfolio(){

    return(

        <ChakraProvider>
        <Box className="Main">    

                <Flex justifyContent={'center'} alignItems={'center'} p='100px' >
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

                <Box pl='100px' >
                        <Text py='5px' fontSize='1em'fontWeight={600}>Acerca de mis...</Text> 
                        <Text py='5px' color='red' fontSize='1.8em' letterSpacing={4} fontWeight={600}>Skills</Text>
                </Box>

                <Flex justifyContent={'center'} alignItems={'center'} px='100px' paddingBottom={250}> 
                        <Box w='50%'>

                                <Text py='5px' fontSize='0.8em'>Desarrollo web Front End</Text>
                                <Progress value={80} colorScheme='yellow' h='18px' borderRadius='2'/>
                                <Text py='5px' fontSize='0.8em'>Desarrollo web Back End</Text>
                                <Progress value={60} colorScheme='yellow' h='18px'borderRadius='2'/>
                                <Text py='5px' fontSize='0.8em'>Diseño Digital</Text>
                                <Progress value={90} colorScheme='yellow' h='18px'borderRadius='2'/>                        
                        </Box>
                        <Flex w='50%' justifyContent={'center'} >
                                <Flex justifyContent={'center'} alignItems='center' flexDirection='column' p='10' bgColor='#f3f2f5' borderRadius='15' boxShadow='2xl'>
                                        <EmailIcon boxSize={10} />
                                        <Text>Contactarme</Text>
                                </Flex>
                                <Flex justifyContent={'center'} alignItems='center' flexDirection='column' p='10' bgColor='#f3f2f5' borderRadius='15' ml='10' boxShadow='2xl'>
                                        <CalendarIcon boxSize={10} />
                                        <Text>Pedir una cita</Text>
                                </Flex>
                        </Flex>
                </Flex>


        </Box> 
        </ChakraProvider>
                )    
        }

        export default DesktopPortfolio;