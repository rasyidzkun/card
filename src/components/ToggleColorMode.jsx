import { Button, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode} pos={"absolute"} top={0} right={0} m={2}>
      {colorMode === "dark" ? (
        <SunIcon color={"orange.200"} />
      ) : (
        <MoonIcon color={"blue.700"} />
      )}
    </Button>
  );
};

export default ToggleColorMode;
