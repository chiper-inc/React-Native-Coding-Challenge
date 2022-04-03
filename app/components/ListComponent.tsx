import React from 'react';
import { RefreshControl } from 'react-native';
import { Avatar, List, ListItem } from '@ui-kitten/components';


function ListComponent(props: any) {


    const renderArticle = ({ item, index }: any) => (
        <ListItem
            key={index}
            title={`${item.data.title}`}
            description={`${item.data.author}`}
            accessoryLeft={() => <Avatar style={{}} size='medium' source={{uri: 'https://cdn-icons-png.flaticon.com/512/1384/1384019.png'}} />}
        />
    )

    return (
        <List
            data={props.articles}
            renderItem={renderArticle}
            refreshControl={
                <RefreshControl
                    refreshing={props.refreshing}
                    onRefresh={props.onRefresh}
                />
            }
        />
    );
}

export default ListComponent;



