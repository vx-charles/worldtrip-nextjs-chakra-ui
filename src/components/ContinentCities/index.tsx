import { Container, Grid, Heading } from "@chakra-ui/react";

import { ContinentProps } from "@/pages/continent/[slug]";
import ContinentCities from "./cities";

export default function Cities({ continent }: ContinentProps) {
  return (
    <Container maxW="1200px" mb="40px">
      <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10">
        Cidades +100
      </Heading>
      <Grid
        templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        gap={["20px", "45px"]}
        alignItems="center"
        justifyContent="center"
        px={["30px", "0"]}
      >
        {continent.cities100.map(city => (
          <ContinentCities
            key={city.name}
            name={city.name}
            country={city.country}
            flag={city.flag}
            image={city.image}
          />
        ))}
      </Grid>
    </Container>
  );
}
