import React from "react"
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import GestureRecognizer from "react-native-swipe-gestures"
import PreviousButton from "../../PreviousButton"

const styles = StyleSheet.create({
  modalStyle: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
    top: 0
  },
  modalWrapperStyle: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
    backgroundColor: "rgba(0, 0, 0, .7)"
  },
  stylePrevBtn: {
    position: "absolute",
    left: 5,
    top: 5,
    zIndex: 99
  },
  stylePhoto: {
    width: "60%",
    height: "40%",
    borderRadius: 10,
    marginTop: 100
  },
  styleTextWrapper: {
    marginTop: 30,
    width: "90%",
    height: "25%",
    flex: 1,
    alignItems: "center"
  },
  styleName: {
    fontSize: 36,
    color: "#fff"
  },
  stylePhone: {
    fontSize: 30,
    color: "#fff"
  },
  styleGesture: {
    width: "100%",
    flex: 1,
    alignItems: "center"
  }
})

const ModalContact = ({ isVisiblePhoto, setIsVisiblePhoto, contact, swipeLeft, swipeRight }) => {
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
  }

  return (
    <Modal
      animationType="fade"
      visible={isVisiblePhoto}
      transparent
      style={styles.modalStyle}
    >
      <GestureRecognizer
        onSwipeLeft={swipeLeft}
        onSwipeRight={swipeRight}
        config={config}
        style={styles.styleGesture}
      >
        <View style={styles.modalWrapperStyle}>
          <PreviousButton
            onPress={setIsVisiblePhoto}
            styleBtn={styles.stylePrevBtn}
          />
          <TouchableOpacity onPress={swipeLeft}>
            <Text style={styles.stylePhone}>right</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={swipeRight}>
            <Text style={styles.stylePhone}>left</Text>
          </TouchableOpacity>
          <Image
            style={styles.stylePhoto}
            source={{ uri: contact.picture.large }}
          />
          <View style={styles.styleTextWrapper}>
            <Text style={styles.styleName}>{contact.name.first} {contact.name.last}</Text>
            <Text style={styles.stylePhone}>{contact.phone}</Text>
          </View>
        </View>
      </GestureRecognizer>
    </Modal>
  )
}

export default ModalContact
