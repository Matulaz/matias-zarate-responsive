import * as React from 'react'
import './DesktopFooter.css'
import {  ChakraProvider, Text, Flex } from '@chakra-ui/react'


function DesktopFooter(){

    return(
        <ChakraProvider>
            <Flex className="DesktopFooter" bgColor='#edf2f7' h='60px' justifyContent={'center'} alignItems={'center'} mt='50'>

                <Text fontSize='0.8em'>Find me! at @matulaz - 2023</Text>

                

            </Flex>
        </ChakraProvider>       
    )    
}
    
export default DesktopFooter;