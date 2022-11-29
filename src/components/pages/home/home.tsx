import react, { useState } from 'react';
import { Text, View, Button,Pressable } from 'react-native';
import tw from 'twrnc';
import { PlayerCard } from '../../molecules';
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { useDiceStore, usePlayersStore } from '../../../hooks';
import { PlayerEntity } from '../../../entities';

const HomePage = ({ navigation }) => {
  const {
    players,
    addPlayer,
    deletePlayer,
    changeName,
    changeColor
  }: any = usePlayersStore();
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const [showNameErrorMessage, setShowNameErrorMessage] = useState<boolean>(false);
  const { diceMode, changeDiceMode }: any = useDiceStore();

  const colorCheck = () => {
    const dup = {};
    const playersArray: PlayerEntity[] = Array.from(players.values());
    for (let i =  0; i < playersArray.length; i++) {
      if (dup[playersArray[i].color.value]) return false;
      dup[playersArray[i].color.value] = true
    }
    return true;
  }

  const nameCheck = () => {
    const playersArray: PlayerEntity[] = Array.from(players.values());
    return !playersArray.find(player => player.name === '')
  }

  const onSubmit = () => {
    const isColorsDiff = colorCheck();
    const isValidNames = nameCheck();
    if (isColorsDiff && isValidNames) navigation.navigate('Game')
    if (!isColorsDiff) setShowErrorMessage(true);
    if (!isValidNames) setShowNameErrorMessage(true)
  }

  const generatePlayers = () => {
    const result = Array.from(players.values()).map((player: any) => {
      return (
        <View style={[tw`w-full flex flex-row justify-between m-2`]} key={player.id}>
          <Pressable onPress={() => changeColor(player.id)} >
            <Text style={[tw`w-10 bg-gray-400 flex justify-center p-2 rounded-md`]}>
              <Ionicons name="person" size={24} color={player.color.value} />
            </Text>
          </Pressable>
          <PlayerCard
            name={player.name}
            onChange={changeName}
            id={player.id}
          />
          <Pressable
            onPress={() => deletePlayer(player.id)}
          >
            <Text><AntDesign name="minuscircleo" size={24} color="black" /></Text>
          </Pressable>
        </View>
      )
    });
    return result;
  }

  const playerAmount = players.size

  return (
        <View 
          style={[tw`flex justify-center items-center content-center`]}
        >
          <View style={[tw`w-3/4`]} >
            <View style={[tw`w-full flex flex-row justify-center content-center`]}>
              <Pressable
                style={[tw`p-2 w-1/2`]}
                onPress={addPlayer}
              >
                <Text style={[tw`flex flex-row p-2 w-full bg-white border-slate-400 border-solid border-2 rounded-md text-center`]}>{`Add Player: ${playerAmount}`}</Text>
              </Pressable>
              <Pressable
                style={[tw`p-2 w-3/5`]}
                onPress={changeDiceMode}
              >
                <Text style={[tw`flex flex-row p-2 w-full bg-white border-slate-400 border-solid border-2 rounded-md text-center`]}>{`Dice Mode: ${diceMode}`}</Text>
              </Pressable>
            </View>
            {generatePlayers()}
            {
              showErrorMessage && (
                <Text style={[tw`text-red-600 text-center mb-2`]}>Make sure all the colors are different!</Text>
              )
            }
            {
              showNameErrorMessage && (
                <Text style={[tw`text-red-600 text-center mb-2`]}>Make sure everyone has a name!</Text>
              )
            }
            <Button
              onPress={onSubmit}
              title="Submit"
            />
          </View>
        </View>
  )
};

export default HomePage;