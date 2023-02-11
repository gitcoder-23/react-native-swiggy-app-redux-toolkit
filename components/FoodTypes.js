import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import React from 'react';
import foodtypes from '../data/foodtypes';

const FoodTypes = () => {
  // const foodTypes = [
  //   {
  //     id: '0',
  //     image:
  //       'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/rwnkrdtnusqdkyjssahq',
  //     name: 'Biriyani',
  //   },
  //   {
  //     id: '1',
  //     image:
  //       'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/qwrkgxefwzjergtzowsc',
  //     name: 'Dessert',
  //   },
  //   {
  //     id: '2',
  //     image:
  //       'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/uckbx3rr87jhakb81mbs',
  //     name: 'Burger',
  //   },
  //   {
  //     id: '3',
  //     image:
  //       'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/z9xmu9pb65lcbt3wepud',
  //     name: 'Salad',
  //   },
  //   {
  //     id: '4',
  //     image:
  //       'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/m7osxfhdon2opecztidb',
  //     name: 'Sandwiches',
  //   },
  // ];

  const foodTypes = foodtypes;

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {foodTypes.reverse().map((item, index) => (
          <View style={{ margin: 10 }} key={index}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 60, height: 60, borderRadius: 30 }}
            />
            <Text style={{ marginTop: 6, textAlign: 'center' }}>
              {item.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default FoodTypes;

const styles = StyleSheet.create({});
