import * as React from 'react'
import './MobileForm.css'
import { ChakraProvider, Box, Text, Stack, Input, InputGroup,Textarea, Button,  InputLeftElement } from '@chakra-ui/react'
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'

function MobileForm(){
    return(
        <ChakraProvider>    
            <Box className='Form' py='10%'>
            <Box pl='20px'>
                        <Text fontSize='0.8em'fontWeight={400}>Como puedo ayudarte?..</Text> 
                        <Text color='red' fontSize='1.4em'fontWeight={600} paddingBottom='10px'>Contacto</Text>
            </Box>            

            <Stack spacing={3} p='5'>
                            <Input variant='filled' placeholder='Nombre' />
                            <Input variant='filled' placeholder='E-mail' />

                            <InputGroup>
                            <InputLeftElement
                            pointerEvents='none'
                            children={<PhoneIcon color='gray.300' />}
                            />
                            <Input type='tel' variant='filled' placeholder='Phone number' bg='gray.100' />
                            </InputGroup>

                            <Textarea placeholder='Dejame un comentario' variant='filled'/>

                            <Button>Enviar</Button>
                            
                        </Stack>
            </Box>
        </ChakraProvider>
    )
}

export default MobileForm;