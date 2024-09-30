import { View, TouchableOpacity, Text } from "react-native"
import styles from "./styles"

type ListeItemProps = {
    participant: string
    onPressDestroy: () => void
}

function Participant({ participant, onPressDestroy }: ListeItemProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{participant}</Text>
            <TouchableOpacity style={styles.destroyButton} onPress={onPressDestroy} >
                <Text style={styles.destroyButtonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Participant