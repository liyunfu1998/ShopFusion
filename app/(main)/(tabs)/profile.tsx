import { Pressable, Text, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { RootState, userLogin, userLogout } from "../../../store";

export default function Profile() {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state: RootState) => state.user);

  const onLogIn = async () => {
    dispatch(userLogin("123456"));
  };

  const onLogout = async () => {
    dispatch(userLogout());
  };

  return (
    <View>
      <Text>Profile Screen</Text>
      <Pressable onPress={onLogIn}>
        <Text>Log In</Text>
      </Pressable>
      <Pressable onPress={onLogout}>
        <Text>Log Out</Text>
      </Pressable>
      <Text>{token}</Text>
    </View>
  );
}
