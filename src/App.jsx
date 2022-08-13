import {
  Avatar,
  Box,
  Button,
  Badge,
  Center,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import ToggleColorMode from "./components/ToggleColorMode";
import profileImage from "./images/kucingscript.webp";

const App = () => {
  return (
    <Center py={6}>
      <ToggleColorMode />
      <Box
        maxW={320}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          src={profileImage}
          alt={"kucingscript profile picture"}
          mb={4}
          pos={"relative"}
          _after={{
            content: '""',
            h: 4,
            w: 4,
            bg: "green.300",
            border: "2px solid white",
            rounded: "full",
            pos: "absolute",
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={"2xl"}>Ar Rasyid Sarifullah</Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          @kucingscript
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          Ailurophile, philomath, and JavaScript enthusiasts. PM for work
          inquiries or{" "}
          <Link href={"#"} color={"blue.400"}>
            #tag
          </Link>{" "}
          me in your posts
        </Text>
        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={400}
          >
            #cat
          </Badge>

          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={400}
          >
            #webdev
          </Badge>

          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={400}
          >
            #javascript
          </Badge>
        </Stack>
        <Stack mt={8} direction={"row"} spacing={4}>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            _focus={{
              bg: "gray.200",
            }}
          >
            <Link href={"mailto:kucingscript@gmail.com"} target={"_blank"}>
              Message
            </Link>
          </Button>

          <Button
            flex={1}
            bg={"blue.400"}
            fontSize={"sm"}
            rounded={"full"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%) "
            }
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
          >
            <Link
              href={"https://www.instagram.com/kucingscript/"}
              target={"_blank"}
            >
              Follow
            </Link>
          </Button>
        </Stack>
      </Box>
    </Center>
  );
};

export default App;
