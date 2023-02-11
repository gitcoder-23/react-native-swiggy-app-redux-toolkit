import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SliderBox } from 'react-native-image-slider-box';

const CustomCarousel = () => {
  const sliderImages = {
    images: [
      // 'https://source.unsplash.com/1024x768/?nature',
      // 'https://source.unsplash.com/1024x768/?water',
      // 'https://source.unsplash.com/1024x768/?girl',
      // 'https://source.unsplash.com/1024x768/?tree',
      'https://cdn.grabon.in/gograbon/images/web-images/uploads/1658919135375/swiggy-coupons.jpg',
      'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/mfz2zorpe8in1noybhzo',
      'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/lhnwo9ezxo7mpkpvtdcy',
    ],
  };
  return (
    <View>
      <SliderBox
        // ImageComponent={FastImage}
        images={sliderImages.images}
        sliderBoxHeight={200}
        // onCurrentImagePressed={(index) =>
        //   console.warn(`image ${index} pressed`)
        // }
        // currentImageEmitter={(index) => console.warn(`image ${index} pressed`)}
        dotColor="#13274F"
        inactiveDotColor="#90A4AE"
        // dotStyle={{
        //   width: 15,
        //   height: 15,
        //   borderRadius: 15,
        //   marginHorizontal: 10,
        //   padding: 0,
        //   margin: 0,
        // }}
        paginationBoxVerticalPadding={20}
        autoplay
        circleLoop={true}
        resizeMethod={'resize'}
        resizeMode={'cover'}
        paginationBoxStyle={{
          position: 'absolute',
          bottom: 0,
          padding: 0,
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
          paddingVertical: 10,
        }}
        ImageComponentStyle={{ borderRadius: 15, width: '94%', marginTop: 0 }}
        imageLoadingColor="#2196F3"
        autoplayInterval={2000}
      />
    </View>
  );
};

export default CustomCarousel;

const styles = StyleSheet.create({});
