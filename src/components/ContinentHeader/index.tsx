import { Flex, Heading } from "@chakra-ui/react";

interface HeaderProps {
  title: string;
  image: string;
}

export default function ContinentHeader({ title, image }: HeaderProps) {
  return (
    <Flex
      w="100%"
      h={["150px", "350px", "500px"]}
      align="center"
      bgImage={image}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      position="relative"
      mb={["24px", "80px"]}
    >
      <Flex
        zIndex="1"
        position="absolute"
        w="100%"
        h="100%"
        bg="#000"
        opacity=".5"
      ></Flex>
      <Heading
        as="h1"
        color="gray.100"
        fontSize={["28px", "48px"]}
        zIndex="2"
        w={["100%", "1200px"]}
        h="100%"
        m="auto"
        paddingBlock="60px"
        display="flex"
        alignItems={["center", "center", "center", "self-end"]}
        justifyContent={["center", "center", "center", "start"]}
      >
        {title}
      </Heading>
    </Flex>
  );
}
