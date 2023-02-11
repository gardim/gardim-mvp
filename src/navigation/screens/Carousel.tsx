import { AntDesign } from '@expo/vector-icons';
import { useHeaderHeight } from '@react-navigation/elements';
import React from 'react';
import { Dimensions } from 'react-native';
import { useTheme } from 'react-native-paper';
import Swiper from 'react-native-swiper/src';

import Details from './Details';

const window = Dimensions.get('window');

export const Carousel = ({ navigation }) => {
  const theme = useTheme();
  return (
    <Swiper
      showsButtons
      showsPagination={false}
      nextButton={<AntDesign name="caretright" size={24} color={theme.colors.primary} />}
      prevButton={<AntDesign name="caretleft" size={24} color={theme.colors.primary} />}
      buttonWrapperStyle={{
        alignItems: 'flex-start',
      }}>
      <Details navigation={navigation} />
      <Details navigation={navigation} />
    </Swiper>
  );
};
