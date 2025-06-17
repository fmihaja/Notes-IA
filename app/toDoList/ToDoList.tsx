import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import Card from "../components/Card";
import Header from "../components/Header";
import Input from "../components/Input";
import ModalView from "../components/ModalView";
import TaskCard from "../components/TaskCard";
import ThemedText from "../components/ThemedText";
import { useThemeColors } from "../hooks/useThemeColors";

export default function ToDoList() {
    const colors = useThemeColors();
    const [modif, setModif] = useState<boolean>(false);
    const [task, setTask] = useState<{
        id: string;
        title: string;
        description: string;
    }>({
        id: "",
        title: "",
        description: "",
    });
    const [tasks, setTasks] = useState<
        { id: string; title: string; description: string }[]
    >([]);
    const [modalVisible, setModalVisible] = useState(false);
    const addTask = () => {
        setTasks((prev) => [{ ...task, id: Date.now().toString() }, ...prev]);
        setModalVisible(false);
    };
    const checkNote = (id: number) => {
        const taskSelected = tasks.find((item) => +item.id == id)!;
        setModalVisible(true);
        setModif(true);
        setTask({
            id: taskSelected.id,
            title: taskSelected.title,
            description: taskSelected.description,
        });
        setModalVisible(true);
    };
    const updateTask = (id: number) => {
        const taskSelected = tasks.find((item) => +item.id == id)!;
        setTask((prev) => ({
            ...prev,
            id:taskSelected.id,
        }));
        setTasks((prev)=> prev.map(item=>
                  +item.id === id? { ...task } : item
        ))
        setModalVisible(false);
    };

    return (
        <SafeAreaView
            style={[styles.container, { backgroundColor: colors.primary }]}
        >
            {/* header */}
            <Header title="Notes" icon="create-outline" />
            {/* body */}
            <View style={[styles.body, { backgroundColor: colors.grayWhite }]}>
                <FlatList
                    data={tasks}
                    keyExtractor={(item) => item.id}
                    style={{ flex: 1 }}
                    contentContainerStyle={
                        tasks.length === 0 ? styles.emptyContainer : undefined
                    }
                    renderItem={({ item }) => (
                        <TaskCard
                            title={item.title}
                            description={item.description}
                            date={+item.id}
                            onPress={() => checkNote(+item.id)}
                        />
                    )}
                    ListEmptyComponent={
                        <ThemedText variant="headLine">
                            Aucune tâche pour l'instant.
                        </ThemedText>
                    }
                />
                <TouchableOpacity
                    style={[styles.addButton]}
                    onPress={() => {
                        setModalVisible(true);
                        setTask({
                            id: "",
                            title: "",
                            description: "",
                        });
                        setModif(false);
                    }}
                >
                    <Ionicons
                        name="add-outline"
                        size={50}
                        color={colors.grayWhite}
                    />
                </TouchableOpacity>
            </View>
            {/* modal */}
            <ModalView
                modalState={modalVisible}
                setModalState={setModalVisible}
            >
                <Card
                    title="Nouvelle Note"
                    footer={
                        <>
                            {!modif ? (
                                <Button
                                    onPress={addTask}
                                    disabled={
                                        task.title.trim().length == 0 ||
                                        task.description.trim().length == 0
                                    }
                                >
                                    <ThemedText
                                        color="grayWhite"
                                        variant="subtitle1"
                                    >
                                        Ajouter
                                    </ThemedText>
                                </Button>
                            ) : (
                                <Button
                                    onPress={()=>updateTask(+task.id)}
                                    disabled={
                                        task.title.trim().length == 0 ||
                                        task.description.trim().length == 0
                                    }
                                >
                                    <ThemedText
                                        color="grayWhite"
                                        variant="subtitle1"
                                    >
                                        Modifier
                                    </ThemedText>
                                </Button>
                            )}
                            <Button
                                onPress={() => {
                                    setModalVisible(false);
                                }}
                                backgroundColor="secondary"
                            >
                                <ThemedText
                                    color="grayWhite"
                                    variant="subtitle1"
                                >
                                    Annuler
                                </ThemedText>
                            </Button>
                        </>
                    }
                >
                    <Input
                        placeholder="Entrez le titre"
                        value={task.title}
                        onChangeText={(title) => {
                            setTask((prev) => ({
                                ...prev,
                                title,
                            }));
                        }}
                    />
                    <Input
                        placeholder="Entrez le description"
                        height={150}
                        multiline={true}
                        textAlignVertical="top"
                        value={task.description}
                        onChangeText={(description) => {
                            setTask((prev) => ({
                                ...prev,
                                description,
                            }));
                        }}
                    />
                </Card>
            </ModalView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    body: {
        flex: 1,
        position: "relative",
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    addButton: {
        position: "absolute",
        bottom: 16,
        right: 16,
        backgroundColor: "#00561b",
        width: 70,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        // 👇 Ombre pour Android
        elevation: 10,
    },

    openButton: {
        backgroundColor: "#38713e",
        padding: 12,
        borderRadius: 8,
    },
    openButtonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    closeButton: {
        alignSelf: "flex-end",
        backgroundColor: "#38713e",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 4,
    },
    closeButtonText: {
        color: "#fff",
        fontWeight: "bold",
    },
});
