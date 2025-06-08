import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { Colors } from "../constants/Colors";
import { useThemeColors } from "../hooks/useThemeColors";

type Props = TextInputProps & {
    height?: number;
    color?: keyof (typeof Colors)["light"];
};

export default function Input({ height, color, ...rest }: Props) {
    const colors = useThemeColors();
    return (
        <TextInput
            style={[
                styles.input,
                { borderColor: colors.grayMedium },
                { height: height ?? 50 },
                { color: colors[color ?? "grayDark"] },
            ]}
            {...rest}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1, // épaisseur de la bordure
        borderRadius: 10, // arrondir les coins (optionnel)
        padding: 8, // espace intérieur pour le texte
        width: "90%",
    },
});
