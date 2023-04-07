import { Box, Card, CardBody, CardFooter, CardHeader, Center, Container, Flex, Grid, GridItem, Heading, List, ListItem, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

const About = () => {
    return (<>

   
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
      
        </>
  )
}

export default About
//   {/* <Container maxW={'100%'}>
//             Experince Section 
//             <Grid spacing={10} templateColumns='repeate(3,1fr)'>
//                 <GridItem colSpan={1}>
//                     <Heading>demo</Heading>
//                 </GridItem>

//                 <GridItem colSpan={}>
//                 <Heading>demo</Heading>
//                 </GridItem>
//                 <GridItem>
//                 <Heading>demo</Heading>
//                 </GridItem>
                 
                 
//                 {/* <Box>
//                 <Card alignItems={'center'}>
//                     <CardHeader>
//                         <Heading>
//                             Tokenmetrics   
//                         </Heading>
//                     </CardHeader>
                     
//                     <CardFooter>
//                        FULLSTACK DEVELOPER
//                     </CardFooter>
//                     </Card>
//                 </Box>
//                 <Card alignItems={'center'}>
//                     <CardHeader>
//                         <Heading>
//                             eGlobalDoctors 
//                         </Heading>
//                     </CardHeader>
                     
//                     <CardFooter>
//                     Software Engineer 
//                     </CardFooter>
//                 </Card>

//                 <Card alignItems={'center'}>
//                     <CardHeader>
//                         <Heading>
//                             o2CloudSystem 
//                         </Heading>
//                     </CardHeader>
                     
//                     <CardFooter>
//                        Android Developer(Intern)
//                     </CardFooter>
//                 </Card> */}
//                 </Grid>
//                 {/* </Container> */} 