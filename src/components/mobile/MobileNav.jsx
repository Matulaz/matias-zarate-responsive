import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    IconButton,
    Box
} from "@chakra-ui/react"

import { HamburgerIcon } from '@chakra-ui/icons'
import './MobileNav.css'



function MobileNav() {


const estiloMobile = {
bg:'gray.100',
}


    return (
        <Box className='MobileNav' p='12px' w='100%' bg='white'>
            <Menu>
                <MenuButton
                    sx={estiloMobile}
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='outline'
                />
                <MenuList>
                <MenuGroup title='Matias Zarate'/>
                    <MenuItem>
                        Acerca de mi...
                    </MenuItem>
                    <MenuItem command='/dev+desgn'>
                        Portfolio
                    </MenuItem>
                    <MenuItem command='/matiaszarate'>
                        Encontrame en Linkedin
                    </MenuItem>
                    <MenuItem command='/matulaz'>
                        Mi perfil de Github
                    </MenuItem>
                    <MenuItem>
                        Contacto
                    </MenuItem>
            
                </MenuList>
            </Menu>
        </Box>

    )
}

export default MobileNav;