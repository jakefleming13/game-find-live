import { extendTheme, Theme, ThemeConfig } from "@chakra-ui/react";

//create Configuration object, annotate with 'ThemeConfig' to have access to 'initialColorMode' prop
const config: ThemeConfig = {
    initialColorMode: 'dark' 
};

//Call 'extendTheme' and pass our configuration object, returns a theme
const theme = extendTheme({config});

export default theme;