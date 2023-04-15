import * as React from 'react'
import { ChakraProvider, Box,Center, Grid, GridItem } from '@chakra-ui/react'
import './DesktopPortfolio.css'
import foto from '../../assets/img/foto2.png'


function DesktopPortfolio(){

    return(

        <ChakraProvider>

            <Grid
                templateAreas={`"foto acerca-de-mi"
                                "foto redes"`}

                gridTemplateRows={'50px 1fr 30px'}
                gridTemplateColumns={'50% 1fr'}
                h='200px'
                gap='0'
                className='Main'
                >
                <GridItem pl='2' area={'foto'}>
                        <Box as='img' src={ foto } alt='matulaz' h='60%' me='500' />
                </GridItem>
                <GridItem pl='2' area={'acerca-de-mi'}>
                        <Center>Hello, world!</Center>
                        <Center>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, id sapiente quidem a rerum, architecto consequatur ea obcaecati minima enim tempore esse odit similique cum nesciunt nemo corrupti assumenda veniam sit laboriosam temporibus, officiis soluta magni at. Perferendis rerum tenetur sequi, et repellendus beatae illo dolorum at! Velit magni totam officiis doloribus cupiditate ducimus accusamus at, minima laudantium placeat similique reiciendis, omnis quaerat sint laboriosam nobis optio modi commodi sed tempore. Et laborum aut a mollitia, eius hic error voluptatum rem quibusdam pariatur aperiam excepturi ad, quod nihil ducimus, saepe numquam beatae? Vel atque vitae eveniet dolor omnis error reiciendis!</Center>
                </GridItem>
                <GridItem pl='2' area={'redes'}>
                        <Center>Hello, world!</Center>
                        <Center>Lorem ipsum dolor sit amet.</Center>
                </GridItem>              
    
            </Grid>







        </ChakraProvider>
        )    
}

export default DesktopPortfolio;