import React from 'react'
import { Button } from 'react-native'
import { WebView } from 'react-native-webview';
import { HeaderBackButton } from 'react-navigation-stack'

export default class Detalles extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            permalink: "",
        }
    }

    componentDidMount() {
        this.setState({ permalink: this.props.navigation.state.params ? this.props.navigation.state.params.permalink : '' })
    }

    render() {

        return (

            <WebView
                source={{
                    uri: this.state.permalink
                }}
            />
        );
    }
}