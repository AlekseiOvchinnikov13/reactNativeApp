import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import ContactIcon from '../contactIcon';
import ContactName from '../contactName';
import ContactInfo from '../contactInfo';
import userLogo from '../../assets/img/userIcon.png';
import {contactsStore} from '../data';

const ContactCard = () => {
  const [contacts, setContacts] = useState(contactsStore);
  const cardPress = id =>
    setContacts([
      ...contacts.map(item => {
        if (item.id === id) {
          item.isOpen = !item.isOpen;
        }
        return item;
      }),
    ]);

  return contacts.map(contact => (
    <TouchableOpacity onPress={() => cardPress(contact.id)} key={contact.id}>
      <View style={{...styles.cardStyle, height: contact.isOpen ? 194 : 90}}>
        <View style={styles.topWrapper}>
          <ContactIcon imageUri={userLogo} />
          <View style={styles.infoColumn}>
            <ContactName name={contact.name} phone={contact.phone} />
            {contact.isOpen && (
              <View style={styles.descriptionWrapper}>
                <ContactInfo title={'address'} description={contact.address} />
                <ContactInfo title={'Mail'} description={contact.mail} />
              </View>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  ));
};

const styles = StyleSheet.create({
  cardStyle: {
    width: 363,
    backgroundColor: 'rgba(229, 229, 229, 0.25)',
    borderRadius: 10,
    marginBottom: 15,
  },
  topWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingTop: 15,
    flexWrap: 'nowrap',
  },
  descriptionWrapper: {
    marginTop: 20,
  },
  infoColumn: {
    flexBasis: '70%',
  },
});

export default ContactCard;
