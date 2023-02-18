import { Grid, GridItem } from "@chakra-ui/react";
import { TravelIcon } from "../TravelIcon";

export function TravelTypes() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1200px"
      flexWrap="wrap"
      gap={[0, 5]}
    >
      <GridItem>
        <TravelIcon
          src="/images/cocktail.svg"
          alt="cocktail image"
          text="vida noturna"
        />
      </GridItem>

      <GridItem>
        <TravelIcon
          src="/images/surf.svg"
          alt="praia image"
          text="praia"
        />
      </GridItem>

      <GridItem>
        <TravelIcon
          src="/images/building.svg"
          alt="moderno image"
          text="moderno"
        />
      </GridItem>

      <GridItem>
        <TravelIcon
          src="/images/museum.svg"
          alt="museum image"
          text="clássico"
        />
      </GridItem>

      <GridItem colSpan={[2, 2, 2, 1]}>
        <TravelIcon
          src="/images/earth.svg"
          alt="earth image"
          text="e mais..."
        />
      </GridItem>
    </Grid>
  );
}
