import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'

const primary = '#0060a8'

const styles = StyleSheet.create(
    {
        textGray:{
            color: '#666'
        },
        btnEliminar: {
            borderRadius: 5, marginTop: 20, backgroundColor: 'red'
        },
        scrollView: {
            marginBottom: 180
        },
        textoCabecera: {
            marginLeft: 10, marginRight: 10, marginBottom: 10, fontSize: 16, color: "#333333"
        },
        cabecera: {
            marginTop: 10, marginBottom: 10
        },
        center: {
            justifyContent: "center", alignItems: "center"
        },
        separador: {
            marginTop: 30
        },
        imageRoundLogin: {
            width: '100%', height: 100, borderRadius: 400 / 2, marginTop: 20
        },
        imageLogin: {
            width: '100%', height: 100, marginTop: 20
        },
        buttonPrimary: {
            borderRadius: 5, marginTop: 20, backgroundColor: primary
        },
        withOutBorder: {
            borderWidth: 0, borderColor: 'transparent', elevation: 0, width: Dimensions.get('window').width - 20
        },
        input: {
            borderTopColor: '#F1F1F1',
            borderRightColor: '#F1F1F1',
            borderLeftColor: '#F1F1F1',
            borderBottomColor: '#F1F1F1',
            borderTopWidth: 1,
            borderRightWidth: 1,
            borderLeftWidth: 1,
            borderBottomWidth: 1,
            color: "black",
            paddingRight: 10,
            paddingLeft: 10,
            paddingBottom: 5,
            paddingTop: 5,
            marginBottom: 20,
            fontSize: 20
        },
        errores: {
            marginTop: -20,
            marginBottom: 20,
            fontSize: 12,
            color: "#f37141",
        },
        boton: {
            backgroundColor: '#1191BD'
        },
        botonRojo: {
            backgroundColor: '#FF6A6A'
        },
        botones: {
            flex: 1,flexDirection: "row",justifyContent: "space-between", marginLeft:20, marginRight:20
        },
    }
)

export { styles, primary }