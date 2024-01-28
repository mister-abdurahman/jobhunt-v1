import { Stack } from "expo-router";
import Colors from "../constants/Colors";

const RootLayout = () =>{
    return <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="job-details/[id]" /> 
    </Stack>
}

export default RootLayout;