import React, { useState } from 'react';
import { Box, Flex, Text, Link, Stack, IconButton, Input, Button, useBreakpointValue, VStack, Fade } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import theme from '../../theme';


const Footer = () => {
  // Dynamic background colors and styles based on screen size
  const footerBg = theme.colors.ten;
  const inputWidth = useBreakpointValue({ base: '100%', md: '70%' });
  const textSize = useBreakpointValue({ base: 'sm', md: 'lg' });
  const socialSize = useBreakpointValue({ base: 'md', lg: 'lg' }); // Adjust icon size for responsiveness
  const buttonSize = useBreakpointValue({ base: 'sm', md: 'md' });
  const paddingX = useBreakpointValue({ base: 4, md: 8, lg: 12 }); // Dynamic padding for different screen sizes
  const sectionSpacing = useBreakpointValue({ base: 2, md: 3 }); 
  const paddingLeft = useBreakpointValue({ base: 6, md: 0 }); // Add left padding on mobile screens
  const [mail,setMail]=useState('')

  function Sendmail() {
    // Create the mailto link with subject and body
    if(mail!==''){
      const email = "contact@matricservices.in";
      const subject = "Subscription";
      const body = mail
     
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  
      window.location.href = mailtoLink;
    }

  }

  return (
    <Fade in={true} transition={{ enter: { duration: 0.5 } }}>
      <Box
        as="footer"
        bg={footerBg}
    
        py={[8, 10]}
        mt={12}
        boxShadow="2xl"
        position="relative"
        overflow="hidden"
        color='#fff'
      >
        <Flex
          direction={['column', 'column', 'row']}
          justify={{base:'space-between',md:'space-between',lg:'space-evenly'}}
          align="flex-start" // Aligns items to the left
          px={paddingX}
          wrap="wrap"
          textAlign="left" // Ensures text alignment is left on all devices
          gap={[8, 10, 0]} // Ensure sections have adequate spacing on smaller screens
        >
          {/* Left Column */}
          {/* //added stack */}
          <VStack
            alignItems="flex-start"
            spacing={sectionSpacing}
            mb={[0, 0, 0]}
            
            pl={paddingLeft} // Add left padding for mobile devices
          >
            <Text fontSize={["xl", "2xl"]} fontWeight="bold" letterSpacing="wide" mb="2px">Matric Services</Text>
            <Stack direction={['column', 'column']} spacing={2}>
            <Link
                  href="/"
                  _hover={{ color: 'black', transform: 'scale(1.1)', textDecoration: 'underline' }}
                  transition="all 0.2s ease-in-out"
                  fontSize={textSize}
                >
                 Home
                </Link>
                <Link
                  href="/about"
                  _hover={{ color: 'black', transform: 'scale(1.1)', textDecoration: 'underline' }}
                  transition="all 0.2s ease-in-out"
                  fontSize={textSize}
                >
                 About
                </Link>
                <Link
                  href="/projects"
                  _hover={{ color: 'black', transform: 'scale(1.1)', textDecoration: 'underline' }}
                  transition="all 0.2s ease-in-out"
                  fontSize={textSize}
                >
                 Projects
                </Link>
                <Link
                  href="/workshop"
                  _hover={{ color: 'black', transform: 'scale(1.1)', textDecoration: 'underline' }}
                  transition="all 0.2s ease-in-out"
                  fontSize={textSize}
                >
                 Workshops
                </Link>
            </Stack>
          </VStack>

          {/* Center Column */}
          <VStack
            alignItems="flex-start"
            spacing={sectionSpacing}
            mb="0px"
            
            pl={paddingLeft}
            >
            <Text fontSize="lg" fontWeight="semibold">Get In Touch</Text>
            <Text fontSize={textSize}>Muralinagar, Visakhapatnam, 530007</Text>
            <a href='tel:+919390555433' style={{fontSize:textSize}}>Phone: +91 9390555433</a>
            <Link href="mailto:contact@matricservices.in" _hover={{ color: 'black' }} fontSize={textSize}>
              Email: contact@matricservices.in
            </Link>
          </VStack>

          {/* Right Column */}
          <VStack
            alignItems="flex-start"
            spacing={sectionSpacing}
          
            pl={paddingLeft} 
            mt="0px"
          >
            <Text fontSize="xl" fontWeight="bold">Follow Us</Text>
            <Stack direction="row" spacing={[2, 4]} justify="flex-start">
              
                <IconButton
                  as="a"
                  href="https://www.facebook.com/matricservices1/"
                  aria-label={`FaFacebook`}
                  icon={<FaFacebook/>}
                  size={socialSize}
                  variant="outline"
                  _hover={{ color: "#292b2a", bg: 'whiteAlpha.900', transform: 'scale(1.3)', boxShadow: 'lg' }}
                  transition="all 0.3s ease-in-out"
                />

               <IconButton
                  as="a"
                  href="https://x.com/Matric_Services?t=OE9Qhghtf1qUZXEpOSnMSw&s=08"
                  aria-label={`FaTwitter`}
                  icon={<FaTwitter/>}
                  size={socialSize}
                  variant="outline"
                  _hover={{ color: "#292b2a", bg: 'whiteAlpha.900', transform: 'scale(1.3)', boxShadow: 'lg' }}
                  transition="all 0.3s ease-in-out"
                />

                  <IconButton
                  as="a"
                  href="https://www.instagram.com/matric_services/profilecard/?igsh=eDRtMDZqZzFjZXpv"
                  aria-label={`FaInstagram`}
                  icon={<FaInstagram/>}
                  size={socialSize}
                  variant="outline"
                  _hover={{ color: "#292b2a", bg: 'whiteAlpha.900', transform: 'scale(1.3)', boxShadow: 'lg' }}
                  transition="all 0.3s ease-in-out"
                />

                  <IconButton
                  as="a"
                  href="https://www.instagram.com/matric_services/profilecard/?igsh=eDRtMDZqZzFjZXpv"
                  aria-label={`FaLinkedin`}
                  icon={<FaLinkedin/>}
                  size={socialSize}
                  variant="outline"
                  _hover={{ color: "#292b2a", bg: 'whiteAlpha.900', transform: 'scale(1.3)', boxShadow: 'lg' }}
                  transition="all 0.3s ease-in-out"
                />

                <IconButton
                  as="a"
                  href="https://www.youtube.com/@matric_services"
                  aria-label={`FaYoutube`}
                  icon={<FaYoutube/>}
                  size={socialSize}
                  variant="outline"
                  _hover={{ color: "#292b2a", bg: 'whiteAlpha.900', transform: 'scale(1.3)', boxShadow: 'lg' }}
                  transition="all 0.3s ease-in-out"
                />
            </Stack>

            <Flex direction={['row', 'row', 'row']} align="center" width="100%" mt={4}>
              <Input
                placeholder="Enter your email"
                variant="filled"
                bg="whiteAlpha.900"
                color="black"
                _placeholder={{ color: 'gray.500' }}
                borderRadius="md"
                padding='10px 20px'
                width={inputWidth}
                onChange={(event)=>setMail(event.target.value)}
                mb={[4, 4, 0]} // Stack input and button on small screens
              />
              <Button
                colorScheme="yellow"
                variant="solid"
                size={buttonSize}
                rightIcon={<MdEmail />}
                ml={[1, 1, 1]} // Align button next to input on medium and large screens
                borderRadius="md"
                _hover={{ color:'black' }}
                transition="all 0.2s ease-in-out"
                onClick={Sendmail}
              >
                Subscribe
              </Button>
            </Flex>
          </VStack>
        </Flex>

        {/* Copyright Section */}
        <Box textAlign="center" py={[4, 6]} mt={8} pl={paddingLeft}>
          <Text fontSize={["sm", "md"]} color="white" fontWeight="medium">
            © {new Date().getFullYear()} Matric Services. All Rights Reserved.
          </Text>
        </Box>
      </Box>
    </Fade>
  );
};

export default Footer;
