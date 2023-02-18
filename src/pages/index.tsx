import Head from 'next/head';
import { Flex } from '@chakra-ui/react';

import { BannerHome } from '@/components/BannerHome';
import { TravelTypes } from '@/components/TravelTypes';
import { ContinentsSlide } from '@/components/ContinentsSlide';

export default function Home() {
  return (
    <>
      <Head>
        <title>WorldTrip</title>
      </Head>
      <Flex direction={"column"}>
        <BannerHome />
        <TravelTypes />
        <ContinentsSlide />
      </Flex>
    </>
  )
}