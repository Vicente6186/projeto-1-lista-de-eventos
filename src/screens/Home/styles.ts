import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        padding: 16,
        paddingTop: 48,
        flex: 1,
        backgroundColor: '#121014',
    },
    title: {
        marginBottom: 24, 
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    // Form
    storeForm: {
        marginBottom: 36,
        flexDirection: 'row',
        gap: 8
    },
    storeTextInput: {
        padding: 8,
        backgroundColor: '#1E1D23',
        color: 'white',
        borderRadius: 8,
        flex: 1,
    },
    storeButton: {
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: '#31CE66',
    },
    storeButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    listEmptyText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    }
})

export default styles