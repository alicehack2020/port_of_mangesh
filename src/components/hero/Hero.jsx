import { DownloadIcon, EmailIcon, SunIcon } from '@chakra-ui/icons'
import { Avatar, Box, Button, Container, Flex, HStack, Heading, Image, Link, Stack, Text, Tooltip, VStack,useColorMode  } from '@chakra-ui/react'
import React from 'react'
import heroImage from "../../img/hero.png"
import lineVertical from "../../img/Line Vector.png"
import github from "../../img/github.png"
import mobile from "../../img/mobile.png"
import linkdlin from "../../img/linkdlin.png"
const Hero = () => {
 
    return (
        <div>
        <Flex mt={20} mx={30} justify={'space-around'}>
          <Box >
                     
            <Heading as='h3' size='md'>Hey</Heading>
            
                <Flex  justify={'flex-start'}>
                    <Heading as='h2' size='xl'>I'm</Heading>
                    <Heading as='h2' size='xl' color={'orange.200'}>Mangesh Pandit.</Heading>  
                </Flex>
                <Box>
                        
                            <Heading as='h2' size='md'>an Full Stack Developer</Heading>  
                            <Image src={lineVertical} width={200}></Image>
                         
                        <Text>It's nice to meet you. I design and code</Text>
                        <Text>beautifully and I love what I do.</Text>
                </Box>
                <HStack mt={5}>
              <Text>Connect Me</Text>
              <Link href='https://github.com/alicehack2020' target='blank'>
                 <Image src={github} width={10}></Image>
              </Link>


              <Link href='https://www.linkedin.com/in/mangesh-pandit-392846153/' target='blank'>
              <Image src={linkdlin} width={10}></Image>
              </Link>

              <Tooltip label={'+917775826975'}>
              <Link href="tel:+917775826975">
                    <Image src={mobile} width={10}></Image>
                </Link>
                </Tooltip>
                    
                  
                   
                    </HStack>   
            <HStack mt={5}>
              <Tooltip label={'mangesh2042@gmail.com'}>
                <Link href="mailto:mangesh2042@gmail.com">
                  <Button leftIcon={<EmailIcon />}>Email Me</Button>  
                </Link>  
              </Tooltip>
              <Link href='https://drive.google.com/drive/folders/1shG7IqM-qh5lRynGa4rCEJdLj-48nlgp?usp=sharing' target='blank'>
                  <Button leftIcon={<DownloadIcon/>} variant={'outline'} >Download CV</Button>        
              </Link>
                </HStack>    
                    
            </Box>
          
          <VStack>
                    <Image height={{base:0,md:300}} src={heroImage}></Image>
          </VStack>

      
           
        </Flex>
      </div>
     
  )
}

export default Hero