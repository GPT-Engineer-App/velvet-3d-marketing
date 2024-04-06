import React from "react";
import { Box, VStack, Heading, Text, Image, useColorModeValue, Container, Flex, Button, Link } from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";

const Index = () => {
  const bgGradient = useColorModeValue("linear(to-b, gray.100, white)", "linear(to-b, gray.800, gray.900)");

  return (
    <Box bg={bgGradient} minH="100vh">
      <Container maxW="container.lg" py={20}>
        <VStack spacing={20}>
          {/* Hero Section */}
          <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
            <Box textAlign={{ base: "center", md: "left" }}>
              <Heading size="2xl" mb={4}>
                Velvet Letters Marketing
              </Heading>
              <Text fontSize="xl" mb={8}>
                Crafting Immersive Digital Experiences
              </Text>
              <Button as={Link} href="#contact" colorScheme="blue" size="lg" rightIcon={<FaEnvelope />}>
                Get in Touch
              </Button>
            </Box>
            <Image src="https://images.unsplash.com/photo-1680536555364-9dd4a1ab313e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwzZCUyMHZlbHZldCUyMGxldHRlcnN8ZW58MHx8fHwxNzEyNDEwNzAxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="3D Velvet Letters" w={{ base: "100%", md: "50%" }} mt={{ base: 8, md: 0 }} />
          </Flex>

          {/* Services Section */}
          <VStack spacing={10} align="stretch">
            <Heading size="xl" textAlign="center">
              Our Services
            </Heading>
            <Flex justify="space-around" wrap="wrap">
              {/* Service 1 */}
              <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={6} m={4}>
                <Image src="https://images.unsplash.com/photo-1510511336377-1a9caa095849?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwzZCUyMHdlYiUyMGRlc2lnbnxlbnwwfHx8fDE3MTI0MTA3MDF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="3D Web Design" />
                <Heading size="md" my={4}>
                  3D Web Design
                </Heading>
                <Text>We create immersive and interactive 3D websites that captivate your audience.</Text>
              </Box>

              {/* Service 2 */}
              <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={6} m={4}>
                <Image src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MHx8fHwxNzEyNDEwNzAyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Digital Marketing Strategy" />
                <Heading size="md" my={4}>
                  Digital Marketing
                </Heading>
                <Text>We develop effective digital marketing strategies to grow your brand online.</Text>
              </Box>

              {/* Service 3 */}
              <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={6} m={4}>
                <Image src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWdufGVufDB8fHx8MTcxMjQxMDcwMnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Brand Identity Design" />
                <Heading size="md" my={4}>
                  Brand Identity
                </Heading>
                <Text>We craft unique and memorable brand identities that resonate with your target audience.</Text>
              </Box>
            </Flex>
          </VStack>

          {/* Portfolio Section */}
          <VStack spacing={10} align="stretch">
            <Heading size="xl" textAlign="center">
              Our Work
            </Heading>
            <Flex justify="space-around" wrap="wrap">
              {/* Project 1 */}
              <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
                <Image src="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwzZCUyMGVjb21tZXJjZSUyMHdlYnNpdGV8ZW58MHx8fHwxNzEyNDEwNzAyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="3D Ecommerce Website" />
                <Box p={6}>
                  <Heading size="md" mb={2}>
                    3D Ecommerce Website
                  </Heading>
                  <Text>An immersive online shopping experience with interactive 3D product visualizations.</Text>
                </Box>
              </Box>

              {/* Project 2 */}
              <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
                <Image src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMG1hcmtldGluZyUyMGNhbXBhaWdufGVufDB8fHx8MTcxMjQxMDcwM3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Virtual Reality Marketing Campaign" />
                <Box p={6}>
                  <Heading size="md" mb={2}>
                    VR Marketing Campaign
                  </Heading>
                  <Text>An engaging virtual reality marketing campaign that transported users to a new world.</Text>
                </Box>
              </Box>
            </Flex>
          </VStack>

          {/* Contact Section */}
          <VStack spacing={10} align="center" id="contact">
            <Heading size="xl">Get in Touch</Heading>
            <Text fontSize="xl" textAlign="center">
              Ready to elevate your brand with cutting-edge 3D experiences? Let's talk!
            </Text>
            <Button as={Link} href="mailto:info@velvetletters.com" colorScheme="blue" size="lg" rightIcon={<FaEnvelope />}>
              Contact Us
            </Button>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;
