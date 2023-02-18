import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: { // substitui todas as cores padrão que o chakra-ui nos dá.
      '900': '#47585B',
      '800': '#999999',
      '100': '#DADADA',
      '50': '#F5F8FA',
    },
    yellow: {
      '500': '#ffba08',
    }
  },
  fonts: {
    heading: 'Poppins, sans-serif', // aplica fonte para todos os cabeçalhos <h1>,...
    body: 'Poppins, sans-serif', // fontes da tag body que aplica em toda aplicação
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.900'
      }
    }
  }
});