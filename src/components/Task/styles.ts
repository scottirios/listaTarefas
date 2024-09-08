import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        marginHorizontal: 24
    },
    name: {
        flex: 1,
        fontSize: 16,
        marginLeft: 16
    },
    buttonText: {
        color: '#fff',
        fontSize: 24
    },
    button: {
        width: 56,
        height: 56,
        backgroundColor: '#E23C44',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
