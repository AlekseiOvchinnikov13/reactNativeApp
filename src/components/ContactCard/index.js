import React, { useState } from "react"
import { StyleSheet, View, TouchableOpacity } from "react-native"
import ContactIcon from "../СontactIcon"
import ContactName from "../ContactName"
import ContactInfo from "../ContactInfo"
import ModalContact from "../Screens/ModalContact"
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

const ContactCard = ({ contact, onPress, usersCount, setUserIndex, userIndex }) => {
  const [isVisiblePhoto, setIsVisiblePhoto] = useState(false)
  const openPhoto = () => {
    setIsVisiblePhoto(true)
    setUserIndex(1) //contact.id
  }

  const swipeLeft = () => {
    console.log(userIndex)
    usersCount - 1 > userIndex
      ? setUserIndex(userIndex + 1)
      : setUserIndex(0)
  }
  const swipeRight = () => {
    console.log(userIndex)
    userIndex - 1 < 0
      ? setUserIndex(usersCount - 1)
      : setUserIndex(userIndex - 1)
  }

  return (
    <TouchableOpacity onPress={() => onPress(contact.id)}>
      <View style={{ ...styles.cardStyle, minHeight: contact.isOpen ? 194 : 90 }}>
        <View style={styles.topWrapper}>
          <TouchableOpacity onPress={openPhoto}>
            <ContactIcon imageUri={{ uri: contact.picture.thumbnail }} />
          </TouchableOpacity>
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
      <ModalContact
        isVisiblePhoto={isVisiblePhoto}
        setIsVisiblePhoto={setIsVisiblePhoto}
        contact={contact}
        swipeLeft={swipeLeft}
        swipeRight={swipeRight}
      />
    </TouchableOpacity>
  )
}


export default ContactCard
