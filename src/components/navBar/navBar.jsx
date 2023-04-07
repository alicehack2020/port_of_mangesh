import { SunIcon } from '@chakra-ui/icons';
import { Box, Button, ButtonGroup, Card, Container, Flex, HStack, Heading, Text, Wrap, useColorMode } from '@chakra-ui/react'
import React, { useState } from 'react'

const NavBar = () => {
    const [selected, setSelected] = useState('Home')
    const { colorMode, toggleColorMode } = useColorMode();
    // const [color, setColor] = useState('white')
    

    const themeChange = () => {
        toggleColorMode() 
        // if (colorMode === 'light')
        // {
        //     setColor('transparent') 
        // }
        // else {
        //     setColor('transparent')   
        // }
        // console.log("colorMode",colorMode)
        // console.log("color",color)

    }
  return (
      <Box mt={5}  bg={'white'} padding={3} marginTop={0}  position={'fixed'} width={'100%'}>
          
          <Flex justify={'space-between'} >
              <Button   rel="noreferrer" variant='ghost' isActive={selected === 'Home' ? true:false} onClick={()=>setSelected('Home')}>Home</Button>
               <HStack spacing='20px'>
                  <ButtonGroup variant='ghost'>
                      <Button isActive={selected === 'About' ? true:false} onClick={()=>setSelected('About')}  display={{sm:'none',md:'none',lg:'block'}}>About</Button>
                      <Button  isActive={selected === 'Projects' ? true:false} onClick={()=>setSelected('Projects')}>Projects</Button>
                      <Button isActive={selected === 'Skill' ? true:false} onClick={()=>setSelected('Skill')}>Skill</Button>
                      <Button isActive={selected === 'contact' ? true:false} onClick={()=>setSelected('contact')}>Contact</Button>
                      <Button isActive={selected === 'Resume' ? true : false} onClick={() => setSelected('Resume')}>Resume</Button>
                      <Button leftIcon={<SunIcon />} onClick={themeChange} variant={'outline'}></Button>
                  </ButtonGroup>
                   
              </HStack>
          </Flex>
          
          
           
      </Box>
  )
}

export default NavBar