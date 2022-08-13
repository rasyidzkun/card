import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  fonts: {
    heading: `Poppins, ${base.fonts?.heading}`,
    body: `Poppins, ${base.fonts?.body}`,
  },
});

export default theme;
