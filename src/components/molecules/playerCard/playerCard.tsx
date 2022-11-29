import react from 'react';
import { View, TextInput, Text } from 'react-native';
import tw from 'twrnc';

const PlayerCard = ({
  name,
  id,
  onChange,
}) => {

  return (
    <View style={[tw`flex flex-row w-1/2  rounded-md p-1 content-center bg-white`]}>
        <TextInput
            value={name}
            onChangeText={(text) => onChange(id, text)}
            placeholder='New Player'
            style={[tw`w-full h-full`]}
          />
    </View>
  )
}

export default PlayerCard;