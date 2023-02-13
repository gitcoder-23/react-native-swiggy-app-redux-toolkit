import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { Fragment, useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import MenuComponent from './MenuComponent';

const FoodItem = ({ item, indesId, cartData }) => {
  // console.log('foodItem-cartData-->', cartData);

  const foodItemData = [item];
  const [selected, setSelected] = useState(['Recommended']);
  const handleItemSelect = (item) => {
    console.log('handleItemSelect-->', item);
    const itemSelected = selected.find((c) => c === item);
    if (itemSelected) {
      setSelected(selected.filter((sel) => sel !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  return (
    <SafeAreaView>
      <View>
        {foodItemData &&
          foodItemData.map((item, i) => (
            <>
              <Pressable
                onPress={() => handleItemSelect(item.name)}
                style={{
                  margin: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
                key={i}
              >
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                  {item.name} ({item.items.length})
                </Text>

                {selected.includes(item.name) ? (
                  <AntDesign name="down" size={24} color="black" />
                ) : (
                  <AntDesign name="left" size={24} color="black" />
                )}
              </Pressable>

              {selected.includes(item.name)
                ? item.items.map((food, index) => (
                    <Fragment key={index}>
                      <MenuComponent food={food} />
                    </Fragment>
                  ))
                : null}
            </>
          ))}
      </View>
    </SafeAreaView>
  );
};

export default FoodItem;

const styles = StyleSheet.create({});
