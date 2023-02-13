import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import React, { useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import CustomCarousel from '../components/CustomCarousel';
import FoodTypes from '../components/FoodTypes';
import QuickFood from '../components/QuickFood';
import hotels from '../data/hotels';
import { Ionicons } from '@expo/vector-icons';
import MenuItem from '../components/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { getInCart } from './redux/CartReducer';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const hotelsData = hotels;

  const cart = useSelector((state) => state.cart.cart);

  // console.log('HomeScreen-cartData-->', cart);

  useEffect(() => {
    dispatch(getInCart());
  }, [cart]);
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TextInput
          style={{ fontSize: 17 }}
          placeholder="Search resturant item or more"
        />
        <AntDesign name="search1" size={24} color="#E52B50" />
      </View>
      <ScrollView
        style={{ marginTop: 0, marginBottom: 60 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Search Bar Start */}

        {/* Search Bar End */}
        <CustomCarousel />
        {/* Food Item Type Scroll */}
        <FoodTypes />
        {/* Food Scroll */}
        <QuickFood />
        {/* Filter buttons */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <Pressable
            style={{
              marginHorizontal: 10,
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#D0D0D0',
              padding: 10,
              borderRadius: 20,
              width: 120,
              justifyContent: 'center',
            }}
          >
            <Text style={{ marginRight: 6 }}>Filter</Text>
            <Ionicons name="filter" size={20} color="black" />
          </Pressable>

          <Pressable
            style={{
              marginHorizontal: 10,
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#D0D0D0',
              padding: 10,
              borderRadius: 20,
              justifyContent: 'center',
              width: 120,
            }}
          >
            <Text>Sort By Rating</Text>
          </Pressable>

          <Pressable
            style={{
              marginHorizontal: 10,
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#D0D0D0',
              padding: 10,
              borderRadius: 20,
              justifyContent: 'center',
            }}
          >
            <Text>Sort By Price</Text>
          </Pressable>
        </View>
        {hotelsData &&
          hotelsData.map((item, index) => (
            <MenuItem key={index} menuItem={item} />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderColor: '#C0C0C0',
    borderRadius: 7,
  },
});
