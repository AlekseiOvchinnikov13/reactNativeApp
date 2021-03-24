import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import PageTitle from './src/components/pageTitle';
import ContactCard from './src/components/contactCard';

const App = () => {
  return (
    <ScrollView style={styles.root}>
      <PageTitle title={'Contacts'} />
      <View style={styles.cardsWrapper}>
        <ContactCard />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  cardsWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default App;
