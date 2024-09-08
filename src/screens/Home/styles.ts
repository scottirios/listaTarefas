import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    containerBlue: {
        height: 200,
        backgroundColor: '#1E90FF',
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    title: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 10
    },
    containerInput: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        top: -30,
        marginBottom: 10
    },
    input: {
        flex: 1,
        maxWidth: 340,
        height: 54,
        padding: 16,
        borderWidth: 0.5,
        borderColor: "#808080",
        borderRadius: 6,
        backgroundColor: "#F9F9F9",
        fontSize: 16,
        fontWeight: "400",
        marginRight: 4
    },
    button: {
        width: 52,
        height: 52,
        backgroundColor: "#0000FF",
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
    },
    list: {
        flex: 1,
        justifyContent: 'center'
    },
    listEmptyText: {
        fontSize: 16,
        fontWeight: 'normal',
        textAlign: 'center',
        position: 'relative',
        top: -100
    }

})