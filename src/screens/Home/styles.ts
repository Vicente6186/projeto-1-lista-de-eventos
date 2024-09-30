import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121014',
        flex: 1,
        padding: 16,
        paddingTop: 48,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 24, 
    },
    // Form
    storeForm: {
        marginBottom: 24,
        flexDirection: 'row',
        gap: 8
    },
    storeTextInput: {
        backgroundColor: '#1E1D23',
        padding: 8,
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
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    listEmptyText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default styles