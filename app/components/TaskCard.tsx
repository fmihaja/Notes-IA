import dayjs from "dayjs";
import {
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps,
    View,
} from "react-native";
import { useThemeColors } from "../hooks/useThemeColors";
import ThemedText from "./ThemedText";

type Props = TouchableOpacityProps & {
    title: string;
    description: string;
    date: number;
};
// dayjs(date).format("DD/MM/YYYY")
export default function TaskCard({ title, description, date, ...rest }: Props) {
    const colors = useThemeColors();
    const now=dayjs(Date.now());
    const createdAt=(): string=>{
        const desc="Il y a ";
        if (dayjs(date).diff(now, 'second')<0 && Math.abs(dayjs(date).diff(now, 'second'))<60){
            return desc+Math.abs(dayjs(date).diff(now, "second"))+ " sec";
        }
        else if (dayjs(date).diff(now, 'minute')<0 && Math.abs(dayjs(date).diff(now, 'minute'))<60){
            return desc+Math.abs(dayjs(date).diff(now, "minute"))+ " min";
        }
        else if (dayjs(now).isSame(dayjs(date))){
            return dayjs(date).format("DD/MM/YYYY");
        }
        return "Maintenant";
    }
    return (
        <TouchableOpacity
            style={[styles.card, { backgroundColor: colors.grayLight }]}
            {...rest}
        >
            <View style={styles.header}>
                <ThemedText variant="title">{title}</ThemedText>
                <ThemedText>{createdAt()}</ThemedText>
            </View>
            <ThemedText style={styles.description}>{description}</ThemedText>
        </TouchableOpacity>
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
        justifyContent: "space-between",
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
    },
});
