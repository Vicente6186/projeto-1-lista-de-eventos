import { Alert, FlatList, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { useState } from "react";
import { set } from "mongoose";
import Participant from "../../components/Participant";

function Home() {

    const [participants, setParticipants] = useState<string[]>([])
    const [participantName, setParticipantName] = useState('')

    function handleParticipantStore() {
        if (!participantName) return Alert.alert('O nome do participante não pode ser vazio!')
        setParticipants([...participants, participantName])
        setParticipantName('')
    }

    function handleParticipantDestroy(indexToDestroy: number) {
        Alert.alert('Deletar o participante', `Tem certeza que deseja deletar o participante?`, [
            { text: 'Cancelar', style: 'cancel' },
            { text: 'Deletar', onPress: () => setParticipants(participants.filter((_, index) => index !== indexToDestroy)) }
        ])
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de participantes</Text>

            <View style={styles.storeForm}>
                <TextInput
                    placeholder="Nome do participante"
                    style={styles.storeTextInput}
                    placeholderTextColor={'white'}
                    onChangeText={setParticipantName}
                    value={participantName}
                />

                <TouchableOpacity style={styles.storeButton} onPress={handleParticipantStore}>
                    <Text style={styles.storeButtonText}>+</Text>
                </TouchableOpacity>
            </View>


            <FlatList
                data={participants}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item, index }) => <Participant participant={item} onPressDestroy={() => handleParticipantDestroy(index)} />}
                ListEmptyComponent={() => <Text style={styles.listEmptyText}>Nenhum participante adicionado ainda!</Text>}
                showsVerticalScrollIndicator={false}
            />

        </View>
    );
}



export default Home;