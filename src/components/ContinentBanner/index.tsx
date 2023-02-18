import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

interface BannerProps {
  title: string;
  subtitle: string;
  image: string;
}

export function ContinentBanner({ title, subtitle, image }: BannerProps) {
  let formatedTitle = title.normalize("NFD").replace(/[^a-zA-Z\s]/g, "");
  formatedTitle = formatedTitle.toLowerCase();

  return (
    <Link href={"/continent/" + formatedTitle}>
      <Flex
        w="100%"
        h={["250px", "450px"]}
        align="center"
        justifyContent="center"
        bgImage={image}
        bgRepeat="no-repeat"
        bgSize="cover"
        position="relative"
      >
        <Flex
          zIndex="1"
          position="absolute"
          w="100%"
          h="100%"
          bg="#000"
          opacity=".5"
        ></Flex>
        <Box textAlign="center" zIndex="2">
          <Stack spacing="10px">
            <Heading
              as="h2"
              color="gray.50"
              fontSize={["3xl", "4xl", "5xl"]}
              fontWeight="700"
            >
              {title}
            </Heading>
            <Text
              color="gray.100"
              fontSize={["0.8rem", "1xl", "2xl"]}
              fontWeight="700"
            >
              {subtitle}
            </Text>
          </Stack>
        </Box>
      </Flex>
    </Link>
  );
}
