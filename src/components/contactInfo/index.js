import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ContactInfo = ({title, description}) => {
  return (
    <View style={styles.descriptionWrapper}>
      <Text style={styles.infoTitle}>{title}</Text>
      <Text style={styles.infoDescription}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionWrapper: {},
  infoTitle: {
    fontSize: 9,
    color: '#00ADD3',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  infoDescription: {
    fontSize: 12,
    color: '#0A0A0A',
    marginBottom: 18,
  },
});

export default ContactInfo;
