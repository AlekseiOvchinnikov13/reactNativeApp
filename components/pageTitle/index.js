import React from 'react';
import {StyleSheet, Text} from 'react-native';

const PageTitle = ({title}) => {
  return <Text style={styles.pageTitle}>{title}</Text>;
};

const styles = StyleSheet.create({
  pageTitle: {
    fontWeight: '300',
    fontSize: 42,
    color: '#B0AAAC',
    marginTop: 25,
    marginLeft: 30,
    marginBottom: 45,
  },
});
export default PageTitle;
