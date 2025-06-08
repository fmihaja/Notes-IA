import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { useThemeColors } from "../hooks/useThemeColors";

export default function TaskCard({ title, description }: { title: string; description: string }) {
    const colors = useThemeColors();

    return (
        <View style={[styles.card, { backgroundColor: colors.secondary }]}>
            <View style={styles.header}>
                <Ionicons name="checkbox-outline" size={24} color={colors.grayWhite} />
                <Text style={[styles.title, { color: colors.grayWhite }]}>{title}</Text>
            </View>
            <Text style={[styles.description, { color: colors.grayWhite }]}>{description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 16,
        borderRadius: 12,
        marginVertical: 8,
        marginHorizontal: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
        gap: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        textTransform: "capitalize"
    },
    description: {
        fontSize: 14,
    },
});
