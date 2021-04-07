import React from "react"
import { StyleSheet, View, TouchableOpacity } from "react-native"
import ContactIcon from "../СontactIcon"
import ContactName from "../ContactName"
import ContactInfo from "../ContactInfo"

// import { contactsStore } from "../data"


const styles = StyleSheet.create({
  cardStyle: {
    width: 363,
    backgroundColor: "rgba(229, 229, 229, 0.25)",
    borderRadius: 10,
    marginBottom: 15
  },
  topWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    paddingTop: 15,
    flexWrap: "nowrap"
  },
  descriptionWrapper: {
    marginTop: 20
  },
  infoColumn: {
    flexBasis: "70%"
  },
  preloader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

const ContactCard = ({ contact, onPress }) =>
  <TouchableOpacity onPress={() => onPress(contact.id)} key={contact.id}>
    <View style={{ ...styles.cardStyle, minHeight: contact.isOpen ? 194 : 90 }}>
      <View style={styles.topWrapper}>
        <ContactIcon imageUri={{ uri: contact.picture.thumbnail }} />
        <View style={styles.infoColumn}>
          <ContactName
            name={`${contact.name.title} ${contact.name.first} ${contact.name.last}`}
            phone={contact.phone}
          />
          {contact.isOpen && (
            <View style={styles.descriptionWrapper}>
              <ContactInfo
                title="address"
                description={`${contact.location.street.number} ${contact.location.street.name}, ${contact.location.city}, ${contact.location.country}`}
              />
              <ContactInfo title="Mail" description={contact.email} />
            </View>
          )}
        </View>
      </View>
    </View>
  </TouchableOpacity>


export default ContactCard
