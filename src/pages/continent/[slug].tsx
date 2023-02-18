import { GetServerSideProps } from "next";
import Head from "next/head";

import ContinentHeader from "@/components/ContinentHeader";
import ContinentContent from "@/components/ContinentContent";
import Cities from "@/components/ContinentCities";
import { CityProps } from "@/components/ContinentCities/cities";

export interface ContinentProps {
  continent: ContinentInfoProps;
}

interface ContinentInfoProps {
  title: string;
  bio: string;
  countries: number,
  languages: number,
  cities: number,
  image: string,
  citiesList: string;
  cities100: CityProps[];
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Head>
        <title>{continent.title} | WorldTrip</title>
      </Head>

      <ContinentHeader title={continent.title} image={continent.image} />
      <ContinentContent continent={continent} />
      <Cities continent={continent} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  let countryBio: ContinentInfoProps[] = [];
  
  await fetch('http://localhost:7000/continents')
    .then(resp => resp.json())
    .then(resp => countryBio = resp);

  const continent = countryBio.find(continent => {
    let formatedTitle = continent.title.normalize("NFD").replace(/[^a-zA-Z\s]/g, "");
    formatedTitle = formatedTitle.toLowerCase();

    return params?.slug === formatedTitle;
  });

  return {
    props: {
      continent,
    }
  }
}