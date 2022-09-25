import React from 'react'
import { Text, View, FlatList, Image } from 'react-native'
import { traerDatos } from './Functions/traerDatos'
import { ListItem, Icon, Badge } from 'react-native-elements';
import moment from "moment";

export default class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            query: this.props.navigation.state.key,
            isFetching: true,
            baseUrl: 'https://reddit.com'
        }
    }

    componentDidMount() {
        this.getData()
    }

    getData() {
        let url = 'https://api.reddit.com/r/pics/hot.json'

        traerDatos(url).then((data) => {
            data.map((value) => {
                if (value.data.subreddit == this.props.navigation.state.key) {
                    this.setState({ data: [...this.state.data, value.data] })
                }
            })

            this.setState({ isFetching: false })
        })

    }

    renderRow = ({ item }) => {

        let breakfast = moment(item.created_utc);
        let lunch = moment();

        return (
            <ListItem
                bottomDivider
                onPress={() => {
                    this.props.navigation.navigate('Detalles', { permalink: this.state.baseUrl + item.permalink });
                }}
            >
                <Image
                    source={{ uri: item.thumbnail }}
                    style={{
                        width: 60,
                        height: 60,
                        resizeMode: 'cover'
                    }}
                    resizeMode='cover'
                />
                <ListItem.Content>
                    <ListItem.Title>{moment.duration(lunch - breakfast).humanize() + ' ago'}</ListItem.Title>
                    <ListItem.Title>{item.title}</ListItem.Title>
                    <ListItem.Subtitle>{item.author}  score: {item.score}  comments: {item.num_comments}</ListItem.Subtitle>
                </ListItem.Content>
                <Text style={{ color: "#ef7b50" }}></Text>
            </ListItem>
        )
    }

    onRefresh = () => {
        this.setState({ isFetching: true }, function () {
            this.getData()
        });
    }

    render() {
        let { data, isFetching } = this.state
        return (
            <View>
                {data.length ?
                    <FlatList
                        data={data}
                        renderItem={this.renderRow}
                        keyExtractor={(item, index) => index.toString()}
                        onRefresh={this.onRefresh}
                        refreshing={isFetching}
                        onEndReachedThreshold={0}
                        nestedScrollEnabled
                    />
                    :
                    <View></View>
                }

                {(!data.length && isFetching) &&
                    <View style={{ justifyContent: "center", alignItems: "center", marginTop:100 }}>
                        <Text>
                            Cargando datos ...
                        </Text>
                    </View>
                }

                {(!data.length && !isFetching) &&
                    <View style={{ justifyContent: "center", alignItems: "center", marginTop:100 }}>
                        <Text>
                            No hay datos para mostrar
                        </Text>
                    </View>
                }

            </View>
        );
    }
}