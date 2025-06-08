import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import ThemedText from "./ThemedText";

type Props = {
    title?: string;
    children?: ReactNode,
    footer?: ReactNode
};

export default function Card({ title, children, footer }: Props) {
    return (
        <View style={styles.modalContent}>
            {title && <ThemedText variant="title">{title}</ThemedText>}
            <View style={styles.modalBody}>
                {children}
                <View style={styles.modalFooter}>
                    {footer}
                </View>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    modalContent: {
        width: "80%",
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 16,
    },
    modalBody: {
        padding: 14,
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
        width: "100%",
    },
    modalFooter: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },
});
