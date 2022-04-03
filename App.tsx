import { StyleSheet } from 'react-native';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';


import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './app/routes';

export default function App() {
  return (
    <NavigationContainer>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Layout style={styles.container}>
          <RootNavigator />
        </Layout>
      </ApplicationProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
});
