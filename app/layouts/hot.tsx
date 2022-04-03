import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Spinner } from '@ui-kitten/components';
import axios from 'axios';

import ListComponent from '../components/ListComponent';
import { API } from '../constants';

function Hot() {
    const [articles, setArticles] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        async function getArticles() {
            await axios(`${API.ULR}hot.json`)
            .then((response: any) => {
                setArticles(response.data.data.children);
                setRefreshing(false);
            });
        }
  
        getArticles();
    }, [refreshing]);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
    }, []);

    if (articles.length > 0) {
        return (
            <Layout>
                <ListComponent articles={articles} onRefresh={onRefresh} refreshing={refreshing} />
            </Layout>
        );
    }
    else {
        return (
            <Layout style={styles.layout}>
                <Spinner size='large' />
            </Layout>
        )
    }
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Hot;