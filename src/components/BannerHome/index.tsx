import { Box, Container, Flex, Heading, Image, Spacer, Stack, Text, useBreakpointValue } from '@chakra-ui/react';

export function BannerHome() {
  const isWideVersion = useBreakpointValue({
    base: false, // nome e email do perfil fica visivel no desktop.
    lg: true // nome e email do perfil não fica visivel no mobile.
  });

  return (
    <Flex
      w="100%"
      h={["auto", "335px"]}
      align="center"
      bgImage="/images/banner-fundo.jpg"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Container maxW={["100%", "1200px"]} paddingY={["28px", "0"]} display="flex" position="relative">
        <Box w={["100%", "524px"]}>
          <Stack spacing="20px">
            <Heading
              as="h1"
              color="gray.50"
              fontSize={["xl", "4xl"]}
              fontWeight="500"
              lineHeight={["30px", "54px"]}
            >
              5 Continentes, <br />
              infinitas possibilidades.
            </Heading>
            <Text color="gray.100" fontSize={["0.8rem", "xl"]} fontWeight="400">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Stack>
        </Box>
        <Spacer />

        { isWideVersion && (
          <Image
            src="/images/banner-airplane.png"
            alt="Airplane image"
            position="absolute"
            right="0"
            top="0"
          />
        )}
      </Container>
    </Flex>
  );
}