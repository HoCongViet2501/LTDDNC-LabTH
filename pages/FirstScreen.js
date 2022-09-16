import { Box, Button, Flex, Text } from "@react-native-material/core";
import { Image } from "react-native";

export default function FisrtScreen() {
    return (
        <Flex direction="column">
            <Box h={30} m={10}>
                <Image source={require('../image/circle.png')}></Image>
            </Box>
            <Box >
                <Text variant="h4" style={{ backgroundColor: "red" }}>GROW YOUR BUSSINESS</Text>
            </Box>
            <Box >
                <Text>We will help you to grow your business using online server</Text>
            </Box>
            <Box style={{ flex: 4, flexDirection: "row" }}>
                <Button title="Login" color="yellow" tintColor="black" />
                <Button title="Sign up" color="yellow" tintColor="black" />
            </Box>
            <Box >
                <Text variant="h1">HOW WE WORK</Text>
            </Box>
        </Flex>
    );
}

