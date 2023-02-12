import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import FoodItem from '../components/FoodItem';

const MenuScreen = ({ route }) => {
  const navigation = useNavigation();
  // const route = useRoute();
  const [hotelMenus, setHotelMenus] = useState(route?.params?.menu);
  useEffect(() => {
    setHotelMenus(route?.params?.menu);
  }, [hotelMenus]);

  const [modalVisible, setModalVisible] = useState(false);
  // const [menu, setMenu] = useState([]);
  const [menu, setMenu] = useState(route?.params?.menu);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  useEffect(() => {
    const fetchMenu = () => {
      setMenu(route?.params?.menu);
    };

    return () => {
      fetchMenu();
    };
  }, [route?.params?.menu]);

  // console.log('@@menuScreen-hotelMenus-->', hotelMenus);

  return (
    <>
      <ScrollView
        style={{ marginTop: 50 }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            height: 300,
            backgroundColor: '#B0C4DE',
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: 10,
            }}
          >
            <Ionicons
              onPress={() => navigation.goBack()}
              name="arrow-back"
              size={24}
              color="black"
            />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <AntDesign name="search1" size={22} color="black" />
              <Text style={{ fontSize: 16, fontWeight: '600', marginLeft: 7 }}>
                Search
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: 'white',
              height: 210,
              marginHorizontal: 20,
              marginVertical: 5,
              padding: 10,
              borderRadius: 15,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Text style={{ fontSize: 19, fontWeight: 'bold' }}>
                {route.params.name}
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <AntDesign
                  style={{ marginHorizontal: 7 }}
                  name="sharealt"
                  size={24}
                  color="black"
                />
                <AntDesign name="hearto" size={24} color="black" />
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 7,
              }}
            >
              <MaterialIcons name="stars" size={24} color="green" />
              <Text style={{ marginLeft: 3, fontSize: 17, fontWeight: '400' }}>
                {route.params.rating}
              </Text>
              <Text style={{ marginLeft: 3 }}>•</Text>
              <Text style={{ marginLeft: 3, fontSize: 17, fontWeight: '400' }}>
                {route.params.time}mins
              </Text>
            </View>

            <Text style={{ marginTop: 8, color: 'gray', fontSize: 17 }}>
              {route.params.cuisines}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}
            >
              <Text>Outlet</Text>
              <Text
                style={{ marginLeft: 15, fontSize: 15, fontWeight: 'bold' }}
              >
                {route.params.adress}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}
            >
              <Text>22 mins</Text>
              <Text
                style={{ marginLeft: 15, fontSize: 14, fontWeight: 'bold' }}
              >
                Home
              </Text>
            </View>

            <Text
              style={{
                borderColor: 'gray',
                borderWidth: 0.6,
                height: 1,
                marginTop: 12,
              }}
            />

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}
            >
              <FontAwesome5 name="bicycle" size={24} color="orange" />
              <Text style={{ marginLeft: 7, color: 'gray', fontSize: 16 }}>
                0-3 Kms |
              </Text>
              <Text style={{ marginLeft: 7, color: 'gray', fontSize: 16 }}>
                35 Delivery Fee will Apply
              </Text>
            </View>
          </View>
        </View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 17,
            fontWeight: '500',
            marginTop: 10,
          }}
        >
          MENU
        </Text>
        <Text
          style={{
            borderColor: 'gray',
            borderWidth: 0.6,
            height: 1,
            marginTop: 12,
          }}
        />

        {hotelMenus &&
          hotelMenus?.map((item, index) => (
            <FoodItem item={item} indesId={index} />
          ))}
      </ScrollView>
      {/* Menu Start With Modal */}
      <Pressable
        onPress={toggleModal}
        style={{
          width: 60,
          height: 60,
          borderRadius: 40,
          justifyContent: 'center',
          backgroundColor: 'black',
          marginLeft: 'auto',
          position: 'absolute',
          bottom: 35,
          right: 25,
          alignContent: 'center',
        }}
      >
        <MaterialIcons
          style={{ textAlign: 'center' }}
          name="menu-book"
          size={24}
          color="white"
        />
        <Text
          style={{ textAlign: 'center', color: 'white', fontWeight: '500' }}
        >
          MENU
        </Text>
      </Pressable>

      <Modal isVisible={modalVisible} onBackdropPress={toggleModal}>
        <View
          style={{
            height: 190,
            width: 250,
            backgroundColor: 'black',
            position: 'absolute',
            bottom: 35,
            right: 10,
            borderRadius: 7,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              // flex: 1,
              padding: 10,
            }}
          >
            <Text style={{ color: '#D0D0D0', fontWeight: '600', fontSize: 19 }}>
              Item Type
            </Text>
            <AntDesign
              name="close"
              size={24}
              color="white"
              onPress={() => setModalVisible(false)}
            />
          </View>

          <Text
            style={{
              borderColor: 'gray',
              borderWidth: 0.6,
              height: 1,
              marginTop: 3,
            }}
          />
          {menu.map((item, i) => (
            <View
              style={{
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
              key={i}
            >
              <Text
                style={{ color: '#D0D0D0', fontWeight: '600', fontSize: 19 }}
              >
                {item.name}
              </Text>
              <Text
                style={{ color: '#D0D0D0', fontWeight: '600', fontSize: 19 }}
              >
                {item.items.length}
              </Text>
            </View>
          ))}
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image
              style={{ width: 120, height: 70, resizeMode: 'contain' }}
              source={{
                uri: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza',
              }}
            />
          </View>
        </View>
      </Modal>

      {/* Menu Close With Modal */}
    </>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({});
