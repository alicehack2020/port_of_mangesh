import { AbsoluteCenter, Box, Card, CardBody, CardFooter, Center, Container, Grid, Heading, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import javascriptImage from "../../img/javascript.png"
import html from "../../img/html.png"
import node from "../../img/nodejs.png"
import redux from "../../img/redux.png"
import react from "../../img/react.png"
import mongo from "../../img/mongodb.png"
import android from "../../img/androida.png"
 const Skill = () => {

     const cardStyle = {
         borderTop: "10px solid",
         borderColor: "yellow.200",
         p: "10px",
         m: '1px',
     }
     
  return (
      
          <Box m={'50px'} alignItems={'center'}>
          <Center>
              <Heading>Skills</Heading>
          </Center>
          <SimpleGrid minChildWidth='120px' spacing={'20px'} mt={'30px'} alignItems={'center'}>
                  <VStack>
                  <Card sx={cardStyle}>
                      <Image w={'80px'}  src={javascriptImage}></Image>
                     <Center>JavaScript</Center> 
                      </Card>
                  </VStack>
                  <VStack alignItems={'center'} >
                      <Card sx={cardStyle}>
                      <Image w={'80px'}  src={html}></Image>
                     <Center>HTML</Center> 
                      </Card>
                  </VStack>
                  <VStack>
                      <Card sx={cardStyle}>
                      <Image w={'80px'}  src={node}></Image>
                     <Center>Node Js</Center> 
                      </Card>
                  </VStack>
                  <VStack>
                      <Card sx={cardStyle}>
                      <Image w={'80px'}  src={redux}></Image>
                     <Center>Redux</Center> 
                      </Card>
              </VStack>
              
              <VStack>
                      <Card sx={cardStyle}>
                      <Image w={'100px'}  src={react}></Image>
                     <Center>React Js</Center> 
                      </Card>
              </VStack>
              <VStack>
                      <Card sx={cardStyle}>
                      <Image w={'80px'}  src={mongo}></Image>
                     <Center>MongoDb</Center> 
                      </Card>
              </VStack>
              <VStack>
                      <Card sx={cardStyle}>
                      <Image w={'80px'}  src={android}></Image>
                     <Center>Android</Center> 
                      </Card>
              </VStack>
              
                   
               
          </SimpleGrid>
          </Box>
          
     
  )
}

export default Skill