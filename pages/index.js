import { Flex, Heading, Input, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";

const IndexPage = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700"); // Primeiro parametro eh a cor do Light Theme e segunda do Dark Theme

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackground} p={12} rounded={6}>
        <Heading mb={6}>Login</Heading>
        <Input placeholder="user@app.com" variant="filled" mb={3} type="email" />
        <Input placeholder="******" variant="filled" mb={6} type="password" />
        <Button mb={6} colorScheme="teal">Login</Button>
        <Button onClick={toggleColorMode}>Toggle color mode</Button>
      </Flex>
    </Flex>
  )
}

export default IndexPage;