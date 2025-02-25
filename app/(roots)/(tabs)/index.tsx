import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-rubik ">Index</Text>
      <Link href="/sign-in">Sign In</Link>
      <Link href="/explore" className="font-rubik">
        Sign In
      </Link>
      <Link href="/profile">Sign In</Link>
      <Link href="/properties/1">Sign In</Link>
    </View>
  );
}
