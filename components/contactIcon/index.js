import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';

const ContactIcon = ({imageUri}) => {
  const imagePlag = {
    uri:
      'https://backmantitle.com/wp-content/uploads/2019/01/default-avatar.png',
  };
  const image = imageUri ? imageUri : imagePlag;

  return <ImageBackground source={image} style={styles.styleIco} />;
};

const styles = StyleSheet.create({
  styleIco: {
    width: 63,
    height: 63,
    borderRadius: 50,
    flexBasis: '20%',
  },
});

export default ContactIcon;
