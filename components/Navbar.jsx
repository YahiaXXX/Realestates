import React from 'react'
import Link from "next/link"
import {Menu , MenuButton,MenuList,MenuItem,ItemButton,Flex,Box,Spacer, IconButton} from "@chakra-ui/react"
import {FcMenu,FcHome,FcAbout} from "react-icons/fc"
import {BsSearch} from "react-icons/bs"
import {FiKey} from "react-icons/fi"
function Navbar() {
  return (
    <Flex p="2" borderBottom='2px' borderColor="gray.100" >
        <Box fontSize="3xl" color="blue.300" fontWeight="bold" >
            <Link href="/" paddingLeft="2" >REAL_ESTATE</Link>

        </Box>
        <Spacer/>
        <Box>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu/>} /> 
                <MenuList>
                    <Link href="/" passHref >
                        <MenuItem icon={<FcHome/>} >
                           Home
                        </MenuItem>
                    </Link>
                    <Link href="/search" passHref >
                        <MenuItem icon={<BsSearch/>} >
                           Search
                        </MenuItem>
                    </Link>
                    <Link href="/search?purpose=for-sale" passHref >
                        <MenuItem icon={<FcAbout/>} >
                           Buy Property
                        </MenuItem>
                    </Link>
                    <Link href="/search?purpose=for-rent" passHref >
                        <MenuItem icon={<FiKey/>} >
                           Rent Property
                        </MenuItem>
                    </Link>
                    
                </MenuList>      
                         </Menu>
        </Box>

    </Flex>
  )
}

export default Navbar