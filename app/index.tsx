import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "./components/Button";
import Input from "./components/Input";
import ThemedText from "./components/ThemedText";
import { useThemeColors } from "./hooks/useThemeColors";

export default function Index() {
    const colors = useThemeColors();
    const router = useRouter();
    const goToNextPage = () => {
        if (email=="user@gmail.com" && password=="1234"){
            router.push("/toDoList/ToDoList");
        }
        else{
            alert("Email ou Mot de passe incorrecte")
        }
    };
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    return (
        <SafeAreaView style={[styles.container]}>
            <Ionicons
                name="clipboard-outline"
                size={50}
                color={colors.secondary}
            />
            <View style={styles.card}>
                <Input 
                    placeholder="Entrez votre email" 
                    value={email}
                    onChangeText={(value)=>setEmail(value)}
                />
                <Input
                    placeholder="Entrez mot de pase"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(pwd)=>setPassword(pwd)}
                />
                <Button
                    onPress={goToNextPage}
                    disabled={
                        email.trim().length == 0 ||
                        password.trim().length == 0
                    }
                >
                    <ThemedText variant="subtitle1" color="grayWhite">
                        Connexion
                    </ThemedText>
                </Button>
            </View>
            {/* <ThemedText variant="headLine" color="grayDark">Connexions</ThemedText> */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
    card: {
        padding: 14,
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
        // borderWidth: 1,          // épaisseur de la bordure
        // borderColor: '#333',
        width: "100%",
    },
});
