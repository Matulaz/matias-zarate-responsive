import * as React from 'react'
import { Box, ChakraProvider, Flex } from '@chakra-ui/react'
import './DesktopBotonera.css'




function DesktopBotonera() {




    return(
        <ChakraProvider>
        <Flex justify='center' pt='50px' >
            <Box className='Buttons-container' display='flex' alignItems='center'>
                    <Box p='30px' ps='20'>portfolio dev.</Box>
                    <Box p='30px'borderLeft='#E8E2E2 solid 2px'>logros academicos</Box>
                    <Box p='30px' pe='20' borderLeft='#E8E2E2 solid 2px'>acerca de mi...</Box>
            </Box>
        </Flex>
    </ChakraProvider>
    )
}

export default DesktopBotonera;