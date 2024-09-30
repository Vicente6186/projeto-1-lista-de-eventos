import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        marginBottom: 12,
        backgroundColor: '#1E1D23',
        flexDirection: 'row',
        borderRadius: 8,
        gap: 8,
    },
    name: {
        padding: 12,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        flex: 1
    },
    destroyButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
        borderRadius: 8,
        backgroundColor: '#E23B44',
    },
    destroyButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
})

export default styles