import React from 'react';
import { Modal, View, Text, TouchableHighlight } from 'react-native';
import tw from 'twrnc';

const ErrorModal = ({
  visible,
  setModalVisible,
}) => {
  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={() => {
        setModalVisible(!visible);
      }}
      presentationStyle='formSheet'
    >
      <View style={[tw`flex w-full content-center items-center`]}>
        <View style={[tw`flex w-full justify-center mt-2 mb-2 items-center mt-2`]}>
          <Text style={[tw`text-center font-bold text-lg m-5`]}>Lose a turn -- same city was selected!</Text>
          <TouchableHighlight
            onPress={() => {
              setModalVisible(false)
            }}
            activeOpacity={0.6}
            underlayColor="#A3EBB1"
            style={[tw`w-3/4 p-2 bg-blue-300 flex rounded-md`]}
          >
            <Text style={[tw`text-center`]}>Close</Text>
        </TouchableHighlight>
        </View>
      </View>
    </Modal>
  )
};

export default ErrorModal;