import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView, TouchableHighlight } from 'react-native';
import { useDiceStore, usePlayersStore } from '../../../hooks';
import tw from 'twrnc';
import { PlayerEntity } from '../../../entities';
import {
  randomlySelectRegion,
  getRegionArray,
  getRandomCity,
  getDisplayCityName,
  getDisplayRegionName,
  rollDiceTwice,
  getClassicRegion,
  getPayout,
  formatPayout,
} from '../../../utils/utils';
import { CITIES, CLASSIC_REGION, REGIONS } from '../../../constants';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5, Entypo, FontAwesome, EvilIcons } from '@expo/vector-icons'; 
import { ErrorModal, ManualConfigModal, RegionSelectionModal } from '../../modals';
import { useEffect } from 'react';

const GamePage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showConfigModal, setShowConfigModal] = useState<boolean>(false);
  const [chosenRegion, setChosenRegion] = useState<string | REGIONS>();
  const [currentPlayer, setCurrentPlayer] = useState<PlayerEntity>();
  const [availRegions, setAvailRegions] = useState<(string | REGIONS)[]>([])
  const { players, changeHometown, changeLastDestination, changeDestination }: any = usePlayersStore();
  const playersArray: PlayerEntity[] = Array.from(players.values());
  const { diceMode }: any = useDiceStore();
  const isClassic = diceMode === 'Classic';
  const [showError, setShowError] = useState<boolean>(false);
  useEffect(() => {
    if (chosenRegion && currentPlayer) {
      let newDestination = getRandomCity(chosenRegion)
      if (isClassic) {
        const roll = rollDiceTwice();
        const index = REGIONS[chosenRegion];
        const regionCities = getClassicRegion(index);
        const newCityName = regionCities[roll[1]][roll[0]];
        newDestination = Object.entries(CITIES).find(city => city[0] === newCityName)
      }
      if (newDestination[0] === currentPlayer?.currentDestination?.[0]) {
        setShowError(true);
        return
      }
      if (currentPlayer?.currentDestination) changeLastDestination(currentPlayer.id, currentPlayer.currentDestination);
      changeDestination(currentPlayer.id, newDestination);
      setChosenRegion(undefined)
      setCurrentPlayer(undefined)
      setAvailRegions([])
    }
  }, [chosenRegion, currentPlayer, isClassic]);

  const closeModal = () => {
    setShowModal(false);
  }

  const closeConfigModal = () => {
    setShowConfigModal(false);
    setCurrentPlayer(undefined);
  }

  const modalCallback = (region) => {
    setChosenRegion(region);
    closeModal();
  }

  const determineNextDestination = (player: PlayerEntity) => {
    let newLocation: [string, REGIONS] = getRandomCity();
    let newRegion = newLocation[1];
    if (isClassic) {
      const roll = rollDiceTwice();
      newRegion = CLASSIC_REGION[roll[1]][roll[0]];
    }
    if (!!player?.currentDestination && newRegion === player.currentDestination[1]) {
      const regions: (string | REGIONS)[] = getRegionArray().filter((region) => region !== player.currentDestination[1]);
      setAvailRegions(regions);
      setCurrentPlayer(player);
      setShowModal(true)
    } 
    else if (!player?.currentDestination && newRegion === player.hometown[1]) {
      const regions: (string | REGIONS)[] = getRegionArray().filter((region) => region !== player.hometown[1]);
      setAvailRegions(regions)
      setCurrentPlayer(player);
      setShowModal(true)
    } else {
      if (isClassic) {
        const regionCities = getClassicRegion(newRegion);
        const roll2 = rollDiceTwice();
        const locationName = regionCities[roll2[1]][roll2[0]];
        newLocation = Object.entries(CITIES).find(city => city[0] === locationName)
      }
      if (player?.currentDestination) changeLastDestination(player.id, player.currentDestination)
      changeDestination(player.id, newLocation);
    }
  }

  const onGearPress = (player: PlayerEntity) => {
    setShowConfigModal(true);
    setCurrentPlayer(player)
  }
  
  const generatePlayers = () => {
    const result = Array.from(players.values()).map((player: PlayerEntity) => {
      const regionArray = getRegionArray();
      return (
        <View style={[tw`w-full bg-white flex justify-center rounded-md border-2 m-2`]} key={player.id}>
          <View style={tw`flex flex-row justify-start`}>
          <View style={[tw`flex flex-col justify-center w-1/2`]}>
            <View style={[tw`flex flex-row m-2 content-center`]}>
              <View style={[tw`w-10 bg-gray-400 flex justify-center p-2 rounded-md`]}>
                <Ionicons name="person" size={24} color={player.color.value} />
              </View>
              <View style={[tw`flex justify-center`]}>
                <Text style={tw`ml-3 text-lg`}>{player.name}</Text>
              </View>
            </View>
            <View style={[tw`flex flex-row content-center`]}>
              <Text style={[tw`p-1 pl-2`]}>
                <FontAwesome5 name="city" size={16} color="black" />
              </Text>
              <Text style={tw`flex p-1`}>
                {`${getDisplayCityName(player.hometown[0])}, ${getDisplayRegionName(String(regionArray[player.hometown[1]]))}`}
              </Text>
            </View>
            <View style={[tw`flex flex-row content-center`]}>
              <Text style={tw`p-1`}>
                <Entypo name="location" size={24} color="black" />
              </Text>
              <Text style={tw`flex p-1 pt-2`}>
              {!!player?.lastDestination ? `${getDisplayCityName(player.lastDestination[0])}, ${getDisplayRegionName(String(regionArray[player.lastDestination[1]]))}` : 'TBD'}
              </Text>
            </View>
            <View style={[tw`flex flex-row content-center`]}>
              <Text style={tw`p-1`}>
                <Entypo name="location-pin" size={24} color="black" />
              </Text>
              <Text style={tw`flex p-1 pt-2`}>
                {!!player?.currentDestination ? `${getDisplayCityName(player.currentDestination[0])}, ${getDisplayRegionName(String(regionArray[player.currentDestination[1]]))}` : 'TBD'}
              </Text>
            </View>
          </View>
          <View style={[tw`flex justify-center items-center w-1/2`]}>
              <Text style={tw`p-1`}>
                <FontAwesome name="money" size={48} color="black" />
              </Text>
              <Text style={tw`flex p-1 pt-2 font-bold text-green-600`}>
                {`${player.currentDestination ? `$${formatPayout(getPayout(player?.lastDestination, player.currentDestination))}` : 0}`}
              </Text>
            </View>
          </View>
          <View style={[tw`flex flex-row w-full justify-center mt-2 mb-2`]}>
            <TouchableHighlight
              style={[tw`w-3/4 p-2 bg-blue-300 flex rounded-md`]}
              onPress={() => determineNextDestination(player)}
              activeOpacity={0.6}
              underlayColor="#A3EBB1"
            >
              <Text style={[tw`text-center`]}>Change Destination</Text>
            </TouchableHighlight> 
            <TouchableHighlight
              style={[tw`p-2 bg-white ml-2 border-2 border-slate-400 flex rounded-md`]}
              onPress={() => onGearPress(player)}
              activeOpacity={.2}
              underlayColor="#AAAAAA"
            >
              <EvilIcons name="gear" size={24} color="black" />
            </TouchableHighlight> 
          </View>
        </View>
      )
    })
    return result;
  }

  const generatePressableEntries = (entries, player) => {
    const result = entries.map(entry => {
      return (
        <View style={[tw`flex flex-row w-full justify-center mt-2 mb-2`]} key={entry[0]}>
          <TouchableHighlight
            style={[tw`w-3/4 p-2 bg-blue-300 flex rounded-md`]}
            onPress={() => {
              changeHometown(player.id, entry)
              changeLastDestination(player.id, entry)
            }}
            activeOpacity={0.6}
            underlayColor="#A3EBB1"
          >
            <Text style={[tw`text-center`]}>{getDisplayCityName(entry[0])}</Text>
          </TouchableHighlight>
        </View>
      )
    });
    return result;
  }
  const generateHometownSelection = (player: PlayerEntity) => {
    const region = randomlySelectRegion();
    const regionArray = getRegionArray();
    const cities = Object.entries(CITIES).filter(city => {
      const regionName = regionArray[city[1]];
      return regionName === region
    });
    const entriesJSX = generatePressableEntries(cities, player)
    return (
      <View style={[tw`w-full flex justify-center items-center`]}>
        <Text style={[tw`text-lg font-bold mb-2`]}>{player.name}'s Turn</Text>
        <Text>{`Pick your hometown from the ${getDisplayRegionName(String(region))} region!`}</Text>
        {entriesJSX}
      </View>
    )
  }

  const uninitializedPlayer  = playersArray.find(player => !player.hometown);
  if (uninitializedPlayer) {
    return (
      <View>
        <View style={[tw`w-full flex flex-row justify-center content-center`]}>
        {generateHometownSelection(uninitializedPlayer)}
        </View>
      </View>
    )
  }

  return (
    <ScrollView style={[tw`w-full`]}>
      <ManualConfigModal
        visible={!!showConfigModal && !!currentPlayer}
        setModalVisible={setShowConfigModal}
        player={currentPlayer}
        callback={closeConfigModal}
      />
      <RegionSelectionModal 
        visible={showModal && availRegions.length > 0}
        setModalVisible={closeModal}
        regions={availRegions}
        callback={modalCallback}
      />
      <ErrorModal
        visible={showError}
        setModalVisible={setShowError}
      />
      <View style={[tw`flex justify-center content-center items-center m-2`]}>
          {generatePlayers()}
      </View>
    </ScrollView>
  )
};

export default GamePage;