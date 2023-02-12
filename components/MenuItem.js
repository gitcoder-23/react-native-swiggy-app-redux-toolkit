import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ImageBackground,
} from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const MenuItem = ({ menuItem }) => {
  const navigation = useNavigation();

  // console.log('@@MenuItem-navigation--->', navigation);
  // console.log('@@MenuItem==>', menuItem.menu);

  return (
    <View style={{ margin: 10 }}>
      <Pressable
        onPress={() =>
          navigation.navigate('Menu', {
            id: menuItem.id,
            name: menuItem.name,
            image: menuItem.image,
            rating: menuItem.rating,
            time: menuItem.time,
            address: menuItem.address,
            cost_for_two: menuItem.cost_for_two,
            cuisines: menuItem.cuisines,
            menu: menuItem.menu,
          })
        }
        style={{ flexDirection: 'row' }}
      >
        <View>
          <ImageBackground
            imageStyle={{ borderRadius: 6 }}
            style={{ aspectRatio: 5 / 6, height: 170 }}
            source={{ uri: menuItem.image }}
          >
            <AntDesign
              style={{ position: 'absolute', top: 10, right: 10 }}
              name="hearto"
              size={24}
              color="white"
            />
          </ImageBackground>
        </View>

        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
            {menuItem.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignmenuItems: 'center',
              marginTop: 3,
            }}
          >
            <MaterialIcons name="stars" size={24} color="green" />
            <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: '400' }}>
              {menuItem.rating}
            </Text>
            <Text style={{ marginLeft: 3 }}>•</Text>
            <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: '400' }}>
              {menuItem.time}mins
            </Text>
          </View>

          <Text style={{ fontSize: 16, color: 'gray', marginTop: 6 }}>
            {menuItem.address}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignmenuItems: 'center',
              marginTop: 5,
            }}
          >
            <View
              style={{
                backgroundColor: '#FFB6C1',
                width: 22,

                height: 22,
                borderRadius: 11,
                alignmenuItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 13,
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                ₹
              </Text>
            </View>

            <Text
              style={{
                marginTop: 5,
                marginLeft: 4,
                fontSize: 16,
                fontWeight: '500',
              }}
            >
              {menuItem.cost_for_two} for two
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignmenuItems: 'center',
              marginTop: 10,
            }}
          >
            <MaterialCommunityIcons name="bike-fast" size={24} color="black" />
            <Text style={{ marginLeft: 6, fontSize: 16 }}>FREE DELIVERY</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({});
