import { Flex, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChevronLeftIcon } from '@chakra-ui/icons'

export function Header() {
  const { asPath } = useRouter();
  const notHomePage = asPath !== "/";

  return (
    <Flex
      as="header"
      w={["100%", "100%", "100%", "100%", "1200px"]}
      h={["50", "100"]}
      align="center"
      mx="auto"
      justify="center"
      position="relative"
    >
      {notHomePage && (
        <Link href="/">
          <ChevronLeftIcon
            boxSize={10}
            position="absolute"
            left="0"
            top="50%"
            transform="translate(0, -50%)"
          />
        </Link>
      )}

      <Link href="/">
        <Image
          w={["81px", "185px"]}
          src="/images/logo.svg"
          alt="Logo WorldTrip"
        />
      </Link>
    </Flex>
  );
}