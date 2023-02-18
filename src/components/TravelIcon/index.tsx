import { Box, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react';

interface IconProps {
  src: string;
  alt: string;
  text: string;
}

export function TravelIcon({ src, alt, text }: IconProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Box display="flex" justifyContent="center">
      <Stack spacing={["0", "0", "0", "24px"]} alignItems="center" flexDirection={["row", "row", "row", "column"]}>
        {isWideVersion ? (
          <Image src={src} alt={alt} w="85px" mx="auto" />
        ) : (
          <Text color="yellow.400" fontSize="4xl" mr="2">
            •
          </Text>
        )}

        <Text color="gray.900" fontSize={["md", "xl", "2xl"]} fontWeight="600">
          {text}
        </Text>
      </Stack>
    </Box>
  );
}