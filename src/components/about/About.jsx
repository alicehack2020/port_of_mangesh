import { Box, Card, CardBody, CardFooter, CardHeader, Center, Container, Flex, Grid, GridItem, Heading, List, ListItem, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

const About = () => {
  return (
    
<>
<Container width={'100%'} minW={{ sm:'100%',md:'50%'}} mt={10}>
<Card alignItems={'center'} borderBottom={'10px solid'} borderColor='#FEFCBF'>
<Heading>About Me</Heading>
  <CardHeader>
      Creativity is Intelligence Having Fun...!
      </CardHeader>
      <CardBody alignItems={'stretch'}>
        An experienced Full Stack Developer with expertise in the MERN
        stack. Has 2 years of experience in developing and implementing
        web applications using frontend and backend technologies.
        proficient in React.js, Redux, Node.js, MongoDB, and Express.js, and
        possess strong problem-solving and collaboration skills.
      </CardBody>
  </Card>

</Container>
{/* <SimpleGrid spacing={2} minChildWidth={300}>
          <Box bg='white' h={100} border='1px solid'>work</Box>
          <Box bg='white' h={100} border='1px solid'>demo</Box>
          <Box bg='white' h={100} border='1px solid'>demo</Box>
          <Box bg='white' h={100} border='1px solid'>demo</Box>
          <Box bg='white' h={100} border='1px solid'>demo</Box>
      </SimpleGrid> */}
</>
    
     
      
        
  )
}

export default About
