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
            <Box p='5'>
                <form action="https://formsubmit.co/matiaszarate.dev@gmail.com" method="POST">
                            <Input variant='filled' placeholder='Nombre' mt='10px' />
                            <Input variant='filled' placeholder='E-mail' mt='10px'/>

                            <InputGroup>
                            <InputLeftElement
                            pointerEvents='none'
                            children={<PhoneIcon color='gray.300' mt='10px'/>}
                            />
                            <Input type='tel' variant='filled' placeholder='Phone number' bg='gray.100' />
                            </InputGroup>

                            <Textarea placeholder='Dejame un comentario' variant='filled' mt='10px'/>

                            <Button type='submit' value='Enviar' mt='10px'>Enviar</Button>

                            <Input type='hidden' name='_next' value='https://matias-zarate-cv.netlify.app/' method="POST"></Input>
                </form>                
            </Box>
            </Box>
        </ChakraProvider>
    )
}

export default MobileForm;