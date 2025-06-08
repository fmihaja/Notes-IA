import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { Colors } from "../constants/Colors";
import { useThemeColors } from "../hooks/useThemeColors";

type Props = TouchableOpacityProps & {
    backgroundColor?: keyof (typeof Colors)["light"];
};

export default function Button({ backgroundColor, disabled, ...rest }: Props) {
    const colors = useThemeColors();

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            disabled={disabled}
            style={[
                styles.button,
                { backgroundColor: colors[backgroundColor ?? "primary"] },
                disabled && styles.disabled,
            ]}
            {...rest}
        />
    );
}

const styles = StyleSheet.create({
    button: {
        // backgroundColor: '#007BFF',
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        width: "90%",
    },
    disabled: {
        opacity: 0.5,
    },
});
