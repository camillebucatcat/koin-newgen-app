import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
    <Stack screenOptions={{
      headerShown: false,
      headerShadowVisible: false,
      contentStyle:{
        backgroundColor: '#F2F6F6',
      },
      headerStyle:{
        backgroundColor: '#F2F6F6'
      },
      
    }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
