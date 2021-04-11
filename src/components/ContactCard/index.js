import React, { useState } from "react"
import { StyleSheet, View, TouchableOpacity, Modal, Image, Text } from "react-native"
import ContactIcon from "../СontactIcon"
import ContactName from "../ContactName"
import ContactInfo from "../ContactInfo"
import PreviousButton from "../PreviousButton"
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
  },
  modalStyle:{
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    top: 0
  },
  modalWrapperStyle: {
    width: '100%',
    height: '60%',
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    position: 'relative'
  },
  stylePhoto: {
    width: '100%',
    height: '100%',
    borderRadius: 10
  },
  stylePrevBtn:{
    position: 'absolute',
    left: 5,
    top: 5,
    zIndex: 99
  }
})

const ContactCard = ({ contact, onPress }) => {
  const [isVisiblePhoto, setIsVisiblePhoto] = useState(false)
  const openPhoto = () => setIsVisiblePhoto(true)

  return (
    <TouchableOpacity onPress={() => onPress(contact.id)} key={contact.id}>
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
      <Modal
        animationType="fade"
        visible={isVisiblePhoto}
        transparent
        style={styles.modalStyle}
      >
        <View style={styles.modalWrapperStyle}>
          <PreviousButton
            onPress={setIsVisiblePhoto}
            styleBtn={styles.stylePrevBtn}
          />
          <Image
            style={styles.stylePhoto}
            source={{ uri: contact.picture.large }}
          />
        </View>
      </Modal>
    </TouchableOpacity>
  )
}


export default ContactCard
