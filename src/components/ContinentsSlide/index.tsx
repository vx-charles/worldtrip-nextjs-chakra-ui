import { Container, Flex, Heading, Stack, Text } from '@chakra-ui/react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { ContinentBanner } from '../ContinentBanner';

export function ContinentsSlide() {
  return (
    <Container
      maxW="1200px"
      display="flex"
      flexDirection="column"
      mt={["40px", "80px"]}
      mb="40px"
      px="0"
    >
      <Stack spacing="50px" alignItems="center">
        <Flex w="90px" h="2px" bg="gray.900"></Flex>
        <Flex flexDirection="column">
          <Heading
            as="h2"
            color="gray.900"
            fontSize={["20px", "30px", "36px"]}
            lineHeight={["30px", "42px", "54px"]}
            fontWeight="500"
            textAlign="center"
          >
            Vamos nessa? <br />
            Então escolha seu continente
          </Heading>
        </Flex>

        <Swiper
          cssMode={true}
          navigation={true}
          pagination={{clickable: true}}
          autoplay={{delay: 4000}}
          mousewheel={true}
          keyboard={true}
          modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
          style={{
            width: "100%",
          }}
        >
          <SwiperSlide>
            <ContinentBanner
              title="Europa"
              subtitle="O continente mais antigo."
              image="/images/europa-slide.jpg"
            />
          </SwiperSlide>

          <SwiperSlide>
            <ContinentBanner
              title="Egito"
              subtitle="Cairo - As famosas Pirâmides."
              image="/images/cairo-egito-slide.jpg"
            />
          </SwiperSlide>

          <SwiperSlide>
            <ContinentBanner
              title="Grécia"
              subtitle="Atenas - O Antigo Templo."
              image="/images/athenas-grecia-slide.jpg"
            />
          </SwiperSlide>
        </Swiper>
      </Stack>
    </Container>
  );
}