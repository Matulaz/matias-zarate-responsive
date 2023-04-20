import * as React from 'react'
import './DesktopForm.css'
import {  ChakraProvider, Box, Text, Image, Flex, Stack, Input, InputLeftElement, InputGroup, Textarea  } from '@chakra-ui/react'
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'





function DesktopForm(){

    return(
        <ChakraProvider>
            <Box className="DesktopForm" paddingBottom='100px'>
                <Box pl='200px' paddingBottom='30px' >
                        <Text fontSize='1.2em' fontWeight={600}>Como puedo ayudarte?..</Text> 
                        <Text color='red' fontSize='2.2em' letterSpacing={1} fontWeight={600}>Contacto</Text>
                </Box>

                <Flex mx='200' justifyContent={'center'}>
                        <Box w='50%'>
                            <Text><EmailIcon color='#ffcc00' mx='10px'/>matiaszarate.dev@gmail.com</Text>
                            <Text>Gregorio Gavier 2013 - Oficina C, Cordoba, Argentina</Text>
                            <Text><PhoneIcon color='#ffcc00' mx='10px' />+549 3516 32-9482</Text>

                            <Box>

                            </Box>
                        </Box>
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

                            <Textarea placeholder='Dejanos un comentario' variant='filled' />
                            
                        </Stack>




                </Flex>
            </Box>
        </ChakraProvider>       
    )    
}
    
export default DesktopForm;