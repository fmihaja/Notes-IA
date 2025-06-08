import { Ionicons } from "@expo/vector-icons";
import type { ComponentProps } from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { useThemeColors } from "../hooks/useThemeColors";
import ThemedText from "./ThemedText";

type Props = ViewProps & {
    title: string;
    icon?: ComponentProps<typeof Ionicons>["name"];
};

export default function Header({ title, icon }: Props) {
    const colors = useThemeColors();

    return (
        <View style={styles.header}>
            {icon && (
                <Ionicons name={icon} size={30} color={colors.grayWhite} />
            )}
            <ThemedText variant="headLine" color="grayWhite">
                {title}
            </ThemedText>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
});
