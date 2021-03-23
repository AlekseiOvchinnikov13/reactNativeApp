import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import ContactIcon from '../contactIcon';
import ContactName from '../contactName';
import ContactInfo from '../contactInfo';

const ContactCard = () => {
  const contactsStore = [
    {
      id: 1,
      name: 'Name1 Surname1',
      phone: '010-692-6593 * 09121',
      address: '53198-4257, South Elvis, Hoeger Mall, Apt. 691',
      mail: 'post1@yahoo.com',
      uri: 'https://reactnative.dev/img/tiny_logo.png',
      isOpen: false,
    },
    {
      id: 2,
      name: 'Name2 Surname2',
      phone: '010-692-6593 * 09122',
      address: '53198-4257, South Elvis, Hoeger Mall, Apt. 692',
      mail: 'post2@yahoo.com',
      uri: 'https://reactnative.dev/img/tiny_logo.png',
      isOpen: false,
    },
    {
      id: 3,
      name: 'Name3 Surname3',
      phone: '010-692-6593 * 09123',
      address: '53198-4257, South Elvis, Hoeger Mall, Apt. 693',
      mail: 'post3@yahoo.com',
      uri: 'https://reactnative.dev/img/tiny_logo.png',
      isOpen: false,
    },
    {
      id: 4,
      name: 'Name4 Surname4',
      phone: '010-692-6593 * 09124',
      address: '53198-4257, South Elvis, Hoeger Mall, Apt. 694',
      mail: 'post4@yahoo.com',
      uri: 'https://reactnative.dev/img/tiny_logo.png',
      isOpen: false,
    },
    {
      id: 5,
      name: 'Name5 Surname5',
      phone: '010-692-6593 * 09125',
      address: '53198-4257, South Elvis, Hoeger Mall, Apt. 695',
      mail: 'post5@yahoo.com',
      uri: 'https://reactnative.dev/img/tiny_logo.png',
      isOpen: false,
    },
  ];
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
          <ContactIcon />
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
