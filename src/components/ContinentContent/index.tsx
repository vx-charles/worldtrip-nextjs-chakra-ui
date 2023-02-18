import { ContinentProps } from "@/pages/continent/[slug]";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Container,
  HStack,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";

export default function ContinentContent({ continent }: ContinentProps) {
  return (
    <Container maxW="1200px" mb="80px">
      <HStack spacing={["0", "0", "0", "70px"]} flexDirection={["column", "column", "column", "row"]}>
        <Box w={["100%", "100%", "600px"]} mb={["20px", "20px", "20px", "0"]}>
          <Text fontSize={["lg", "xl", "xl", "2xl"]} lineHeight={["26px", "36px"]} textAlign="justify">
            {continent.bio}
          </Text>
        </Box>
        <Box
          w={["100%", "100%", "600px"]}
          justifyContent="space-between"
          display="flex"
          flexDirection="row"
        >
          <Center flexDirection="column" alignItems={["start", "center"]}>
            <Text
              fontSize={["24px", "48px"]}
              fontWeight="600"
              color="yellow.500"
              lineHeight={["36px", "55px"]}
            >
              {continent.countries}
            </Text>
            <Text fontSize={["18px", "18px", "24px"]} fontWeight="600">
              países
            </Text>
          </Center>
          <Center flexDirection="column" alignItems={["start", "center"]}>
            <Text
              fontSize={["24px", "48px"]}
              fontWeight="600"
              color="yellow.500"
              lineHeight={["36px", "55px"]}
            >
              {continent.languages}
            </Text>
            <Text fontSize={["18px", "18px", "24px"]} fontWeight="600">
              Línguas
            </Text>
          </Center>
          <Center flexDirection="column" alignItems={["start", "center"]}>
            <Text
              fontSize={["24px", "48px"]}
              fontWeight="600"
              color="yellow.500"
              lineHeight={["36px", "55px"]}
            >
              {continent.cities}
            </Text>
            <Text
              fontSize={["18px", "18px", "24px"]}
              fontWeight="600"
              display="flex"
              alignItems="center"
              gap="8px"
            >
              cidades +100
            </Text>
          </Center>

          <Center mt={["37px", "55px"]} ml={["0", "-80px"]}>
            <Popover>
              <PopoverTrigger>
                <InfoOutlineIcon boxSize={5} color="gray.800" />
              </PopoverTrigger>
              <PopoverContent bg="gray.100" color="gray.900">
                <PopoverArrow bg="gray.100" />
                <PopoverHeader fontSize="lg" fontWeight="900">
                  Lista de cidades
                  <PopoverCloseButton top="10px" />
                </PopoverHeader>
                <PopoverBody fontWeight="400" fontSize="lg">
                  {continent.citiesList}
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Center>
        </Box>
      </HStack>
    </Container>
  );
}
