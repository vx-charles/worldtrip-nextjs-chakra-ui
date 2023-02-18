import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react'

import { Header } from '@/components/Header';
import { theme } from '@/styles/theme';
import '../styles/global.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
