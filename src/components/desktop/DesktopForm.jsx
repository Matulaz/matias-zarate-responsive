import * as React from 'react'
import './DesktopForm.css'
import {  ChakraProvider, Box, Text, Image, Flex, Stack, Input, InputLeftElement, InputGroup, Textarea, Button  } from '@chakra-ui/react'
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'






function DesktopForm(){

    return(
        <ChakraProvider>
            <a name='form'></a>
            <Box className="DesktopForm" paddingBottom='30px'>
                <Box pl='200px' paddingBottom='30px' >
                        <Text fontSize='1.2em' fontWeight={600} py='10px'>Como puedo ayudarte?..</Text> 
                        <Text color='red' fontSize='2.2em' letterSpacing={1} fontWeight={600} py='10px'>Contacto</Text>
                </Box>

                <Flex mx='200' justifyContent={'center'}>
                        <Stack spacing={6} w='50%'>
                            <Text><EmailIcon color='#ffcc00' mx='10px'/>matiaszarate.dev@gmail.com</Text>
                            <Text><i class="bi bi-pin-map-fill icono" ></i>Gregorio Gavier 2013 - Oficina C, Cordoba, Argentina</Text>
                            <Text><PhoneIcon color='#ffcc00' mx='10px' />+549 3516 32-9482</Text>

                            <Box>
                                {/* INSERTE ICONOS DE REDES SOCIALES */}
                            </Box>
                        </Stack>

                        <Stack spacing={3} w='50%'>
                            <Input variant='filled' placeholder='Nombre' />
                            <Input variant='filled' placeholder='E-mail' />

                            <InputGroup>
                            <InputLeftElement
                            pointerEvents='none'
                            children={<PhoneIcon color='gray.300' />}
                            />
                            <Input type='tel' variant='filled' placeholder='Phone number' bg='gray.100' />
                            </InputGroup>

                            <Textarea placeholder='Dejame un comentario' variant='filled' h='300' />

                            <Button>Enviar</Button>
                            
                        </Stack>





                </Flex>
            </Box>
        </ChakraProvider>       
    )    
}
    
export default DesktopForm;