import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ContactName = ({name, phone}) => {
  return (
    <View style={styles.titleWrapper}>
      <Text style={styles.nameStyle}>{name}</Text>
      <Text style={styles.phoneStyle}>Phone: {phone}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nameStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00ADD3',
  },
  phoneStyle: {
    fontSize: 17,
    fontWeight: '400',
    color: '#00ADD3',
  },
  titleWrapper: {
    flexDirection: 'column',
  },
});

export default ContactName;
