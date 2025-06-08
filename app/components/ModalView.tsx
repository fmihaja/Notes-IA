import { Modal, StyleSheet, View, ViewProps } from "react-native";

type Props= ViewProps & {
    modalState: boolean,
    setModalState: (visible: boolean) => void
}

export default function ModalView({ modalState, setModalState, ...reste}: Props) {
    return (
        <Modal
            visible={modalState}
            transparent={true}
            animationType="fade" // ou "slide"
            onRequestClose={() => setModalState(false)}
        >
            <View style={styles.overlay} {...reste}/>
            
        </Modal>
    )
}

const styles= StyleSheet.create({
        overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
})
