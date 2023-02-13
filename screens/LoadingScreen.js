import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import LottieView from 'lottie-react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const LoadingScreen = ({ cartData }) => {
  const navigation = useNavigation();
  const route = useRoute();
  console.log('@@LoadingScreen->', route?.params?.cartData);
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Order', { cartData: route?.params?.cartData });
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <LottieView
        source={require('../assets/thumbs.json')}
        style={{
          height: 260,
          width: 300,
          alignSelf: 'center',
          marginTop: 40,
          justifyContent: 'center',
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />
      <Text
        style={{
          marginTop: 20,
          fontSize: 19,
          fontWeight: '600',
          textAlign: 'center',
        }}
      >
        Your Order Has been Recieved
      </Text>
      <LottieView
        source={require('../assets/sparkle.json')}
        style={{
          height: 300,
          position: 'absolute',
          top: 100,
          width: 300,
          alignSelf: 'center',
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />
    </SafeAreaView>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({});
