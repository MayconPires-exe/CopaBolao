import { StatusBar } from 'expo-status-bar';

import { NativeBaseProvider, Text, Center } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Center flex={1} bgColor="black">
        <Text color="white" fontSize={24}>
          Fala seu cuzido
        </Text>
        <StatusBar style="auto" />
      </Center>
    </NativeBaseProvider>
  );
}