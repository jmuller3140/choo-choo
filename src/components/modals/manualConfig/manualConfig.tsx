import React from 'react';
import { Modal, Text, View, TouchableHighlight } from 'react-native';
import { usePlayersStore } from '../../../hooks';
import tw from 'twrnc';
import { useState } from 'react';
import { CITIES, REGIONS } from '../../../constants';
import { getDisplayCityName, getRegionArray } from '../../../utils/utils'
import { RegionSelectionModal } from '../regionSelection';

const ManualConfigModal = ({
  setModalVisible,
  visible,
  callback,
  player,
}) => {
  const { changeHometown, changeLastDestination, changeDestination }: any = usePlayersStore();
  const [modeSelected, setModeSelected] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState();
  
  const options = [{
      id: 1,
      text: 'Select Hometown',
      callback: () => {
        setModeSelected('HOMETOWN');
      }
    },
    {
      id: 2,
      text: 'Select Starting Place',
      callback: () => {
        setModeSelected('START');
      }
    },
    {
      id: 3,
      text: 'Select Destination',
      callback: () => {
        setModeSelected('DESTINATION');
      }
    },
    {
      id: 4,
      text: 'Cancel',
      callback: () => callback()
    }
  ]

  const reset = () => {
    setModeSelected('');
    setSelectedRegion(undefined)
  }

  const determineCallback = (mode) => {
    let callback = changeHometown;
    if (mode === 'START') callback = changeLastDestination
    if (mode === 'DESTINATION') callback = changeDestination
    return callback
  }
  const generateCities = (region: string, mode: string) => {
    const regionArray = getRegionArray();
    const cities = Object.entries(CITIES).filter(city => {
      const regionName = regionArray[city[1]];
      return regionName === region
    });
    const c = determineCallback(mode);
    const result = cities.map(city => {
      return (
        <View style={[tw`flex flex-row w-full justify-center mt-2 mb-2`]} key={city[0]}>
          <TouchableHighlight
            onPress={() => {
              c(player.id, city);
              reset();
              setModalVisible(false)
            }}
            activeOpacity={0.6}
            underlayColor="#A3EBB1"
            style={[tw`w-3/4 p-2 bg-blue-300 flex rounded-md`]}
          >
          <Text style={[tw`text-center`]}>{getDisplayCityName(city[0])}</Text>
        </TouchableHighlight>
      </View>
      )
    })
    return result;
  }

  const generateOptions = () => {
    const result = options.map(option => {
      return (
        <View style={[tw`flex flex-row w-full justify-center mt-2 mb-2`]} key={option.id}>
          <TouchableHighlight
            onPress={() => option.callback()}
            activeOpacity={0.6}
            underlayColor="#A3EBB1"
            style={[tw`w-3/4 p-2 bg-blue-300 flex rounded-md`]}
          >
          <Text style={[tw`text-center`]}>{option.text}</Text>
        </TouchableHighlight>
      </View>
      )
    })
    return result;
  }

  const regionCallback = (region) => {
    setSelectedRegion(region);
  }

  if (modeSelected && !selectedRegion) {
    return (
      <RegionSelectionModal
        visible={!!modeSelected && !selectedRegion}
        setModalVisible={() => {}}
        regions={getRegionArray()}
        callback={regionCallback}
      />
    )
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
          {
            selectedRegion && modeSelected && (
              <View style={[tw`flex w-full justify-center mt-2 mb-2 items-center mt-2`]}>
                <Text style={[tw`text-center font-bold text-lg m-5`]}>Please select your location</Text>
                {generateCities(selectedRegion, modeSelected)}
              </View>
            )
          }
          {
            !modeSelected && !selectedRegion && (
              <View style={[tw`flex w-full justify-center mt-2 mb-2 items-center mt-2`]}>
              <Text style={[tw`text-center font-bold text-lg m-5`]}>Manually set your locations</Text>
              {generateOptions()}
              </View>
            )
          }
      </View>
    </Modal>
  )
};

export default ManualConfigModal;