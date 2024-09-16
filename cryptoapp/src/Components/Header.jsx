import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { BiCoinStack } from "react-icons/bi";

const Header = () => {
  return (
    <HStack p={'4'} shadow={'lg'} height={'20'} bgColor={'#a1a1aa'} justify={'center'} spacing={'28'}>
        <Button variant={'unstyled'} >
        <Link to={'/'}><BiCoinStack size={'32'}/></Link>
        </Button>
        
       <Button variant={'unstyled'} color={'white'}>
        <Link to={'/'}>Home</Link>
       </Button>

       <Button variant={'unstyled'} color={'white'}>
        <Link to={'/coins'}>Coins</Link>
       </Button>

       <Button variant={'unstyled'} color={'white'}>
        <Link to={'/exchanges'}>Exchanges</Link>
       </Button>
    </HStack>
  )
}

export default Header