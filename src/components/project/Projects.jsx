import React from 'react'
import show from "../../img/show.png"
import live from "../../img/live.png"
import step from "../../img/newicon/step.png"
import coastalmind from "../../img/newicon/coastal.png"
import mama from "../../img/newicon/mama.png"
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Flex, HStack, Heading, Image, SimpleGrid, Text, Tooltip, VStack } from '@chakra-ui/react'
import { LockIcon, ViewIcon } from '@chakra-ui/icons'
import javascriptImage from "../../img/javascript.png"
import html from "../../img/html.png"
import node from "../../img/nodejs.png"
import redux from "../../img/redux.png"
import react from "../../img/react.png"
import mongo from "../../img/mongodb.png"
import android from "../../img/androida.png"
const Projects = () => {

  

  var list=[
     
    {
      id:1,
      project_name:"mamaearth clone",
      project_image:mama,
      project_code:"https://github.com/alicehack2020/mama-earth-march-2022",
      project_live:"https://mamaearth.netlify.app/",
      project_info:"  Mamaearth's Natural & Toxin Free Skin Care Products Online. Only Toxin Free Madesafe Certified Brand In India. Visit Now! Free Shipping.",
      view_code:"View Code",
      live_demo:"Live Preview",  
      features_1:"1.Home Page",
      features_2:"2.Sign-in/Sign-up",
      features_3:"3.Product Pages",
      features_4:"4.A user can sign in or sign up.",
      features_5:"5.User Profile",
      features_6:"6.Cart and Payment Page",

      tech:"HTML | CSS | Javascript",
      responsibilities1:" 1. Built user profile page",
      responsibilities2:" 2. Get user data from local storage.",
      responsibilities3:"A collaborative project built by a team of 4 executed in 4 days.",
      code: true,
      stack: [
        {
          img: html,
          name:'Html'
        },
        {
          img: javascriptImage,
          name:'JavaScript'
        },
        {
          img: javascriptImage,
          name:'JavaScript'
        },
        {
          img: javascriptImage,
          name:'JavaScript'
        },
        {
          img: javascriptImage,
          name:'JavaScript'
        },
        {
          img: javascriptImage,
          name:'JavaScript'
        }
         
      ]  
    },

    {
      id:2,
      project_name:"step1 Education",
      project_image:step,
      project_code:"",
      project_live:"https://play.google.com/store/apps/details?id=com.steponeeducation.user",
      project_info:"Step1 Education is  online learning app, offering a comprehensive learning experience for learners.  easy-to-use interface and lessons designed by experienced faculty",
      view_code:"Production",
      live_demo:"Live Preview",

     
  
      tech:" HTML | CSS | Javascript|Java|Firebase|One Signal ",
      features_1:"1.Login, Register, Forgot Password",
      features_2:"2.Online Course",
      features_3:"3.Online Exam",
      features_4:"4.Razorpay Payment gateway",
      features_5:"5.Firebase notification",
      features_6:"6.Online Notes",
       
      responsibilities1:" Build backend and Mobile Desing,Notification Integration ",
      responsibilities2:"",
      responsibilities3:"A collaborative   built by a team of 3 executed in 3 months.",
      code: false , 
      stack: [
        {
          img: html,
          name:'HTML'
        },
        {
          img: javascriptImage,
          name:'JavaScript'
        },
        {
          img: android,
          name:'Android'
        }
      ] 
    },
    {
      id:3,
      project_name:"Coastal Mind",
      project_image:coastalmind,
      project_code:"",
      project_live:"https://play.google.com/store/apps/details?id=com.akarz",
      project_info:"This app is built for 1st to 10th standard students who want to learn at a low cost. This app content semi, English, Marathi medium students content",
      view_code:" Production",
      live_demo:"Live Preview",

     
  
      tech:" HTML | CSS | Javascript|Java|Firebase|One Signal",
      features_1:" 1. User Authentification",
      features_2:" 2. User-Friendly Ui",
      features_3:" 3. Student Can learn online at a low cost",
      features_4:" 4. Razorpay Payment gateway",
      features_5:" 5.Online Exam,Video Lectures",
      features_6:"use full for 1st to 10th standards student",
       
      responsibilities1:"payment gateway Integration,Deployment on playstore",
      responsibilities2:"",
      responsibilities3:"A  project built by a team of 3 executed in 3 months.",
      code: false,
      stack: [
        {
          img: html,
          name:'HTML'
        },
        {
          img: javascriptImage,
          name:'JavaScript'
        },
        {
          img: android,
          name:'Android'
        }
      ] 
    }  
]

  
  
  const cardStyle = {
    m: "10px"
  }

  return (
     
    <Box  m={'50px'} alignItems={'center'} id='Projects'>
      <Center>
         <Heading>Recent Projects</Heading>
      </Center>
      
      <SimpleGrid minChildWidth={'200px'} spacing={10}>
        {
          list.map((e)=>{
            return(<Card sx={cardStyle}>
              <CardHeader alignItems={'center'}>
              <center fontWeight={'bold'}> {e.project_name}</center>
             </CardHeader>
              <CardBody alignItems={'center'}>
                <Image src={e.project_image}></Image>
                <Text fontWeight={'bold'}>About:</Text>
                <Text>{ e.project_info}</Text>

                
                
                <Box alignItems={'center'}>
                    <Text fontWeight={'bold'}>TeckStack:</Text>
                  <SimpleGrid minChildWidth={'50px'} spacing={'5px'} >
                    {
                      e.stack.map((e) => {
                        return (<>
                          {/* <Card m={'2px'} p={'10px'} w={'80px'} h={'70px'}> */}
                            <Tooltip label={e.name}>
                              <Center>
                                <Avatar src={e.img}></Avatar>
                                </Center>
                            </Tooltip>
                        {/* </Card> */}
                        </>)
                      })
                    }
                  </SimpleGrid>
                 </Box>
              </CardBody>
              <CardFooter>
                <Flex w={'100%'} flexDirection={{ base: 'column', md: 'column',lg:'row'}} justifyContent={'space-between'}>
                  <Box >
                  <a href={e.project_live} target="_blank" rel="noreferrer">
                  <Button leftIcon={<ViewIcon />}>{e.live_demo}</Button>
                  </a>
                  </Box>
                  <Box mt={{base:'10px',md:'10px',lg:'0px'}}>
                  {
                    e.code===true?<>
                    <a href={e.project_code} target="_blank" rel="noreferrer">
                    <Button leftIcon={<ViewIcon />} variant={'outline'}>{e.view_code}</Button>
                    </a>
                    </> : <>
                    <Tooltip label={'This is Producation app'}>
                    <Button isDisabled leftIcon={<LockIcon />}  variant={'outline'}>View Code</Button>
                    </Tooltip>
                    </> 
                }
                  </Box>
                
                
                </Flex>
                
              </CardFooter>
            </Card>)
          })
          
        }
      </SimpleGrid>
      </Box>
     
  
  )
}




export default Projects