import dayjs from 'dayjs';
import { StyleSheet, View } from "react-native";
import { useThemeColors } from "../hooks/useThemeColors";
import ThemedText from "./ThemedText";

type Props={ 
    title: string; 
    description: string,
    date: number 
}

export default function TaskCard({ title, description, date }: Props ) {
    const colors = useThemeColors();

    return (
        <View style={[styles.card, { backgroundColor: colors.grayLight }]}>
            <View style={styles.header}>
                <ThemedText variant="title">{title}</ThemedText>
                <ThemedText>{dayjs(date).format("DD/MM/YYYY")}</ThemedText>
            </View>
            <ThemedText style={styles.description}>{description}</ThemedText>
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
        justifyContent:"space-between",
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
    },
});
