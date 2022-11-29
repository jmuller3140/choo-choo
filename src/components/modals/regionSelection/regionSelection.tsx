import React, { useState } from 'react';
import { Modal, View, Text, Pressable, TouchableOpacity, TouchableHighlight } from 'react-native';
import { REGIONS } from '../../../constants';
import { getDisplayRegionName } from '../../../utils/utils';
import tw from 'twrnc';

type RegionSelectionModal = {
  visible: boolean;
  setModalVisible: (isVisible) => void;
  regions: (string | REGIONS)[],
  callback: (region) => void;
}
const RegionSelectionModal: React.FC<RegionSelectionModal> = ({
  visible,
  setModalVisible,
  callback,
  regions,
}) => {
  const generateRegions = () => {
    const result = regions.map(region => {
      return (
        <View style={[tw`flex flex-row w-full justify-center mt-2 mb-2`]} key={region}>
          <TouchableHighlight
            key={region}
            onPress={() => callback(region)}
            activeOpacity={0.6}
            underlayColor="#A3EBB1"
            style={[tw`w-3/4 p-2 bg-blue-300 flex rounded-md`]}
          >
          <Text style={[tw`text-center`]}>{getDisplayRegionName(String(region))}</Text>
      </TouchableHighlight>
      </View>
      )
    })
    return result;
  }
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
        <Text style={[tw`text-center font-bold text-lg m-5`]}>Please pick your next region!</Text>
        {generateRegions()}
      </View>
    </View>
  </Modal>
  )
};

export default RegionSelectionModal;