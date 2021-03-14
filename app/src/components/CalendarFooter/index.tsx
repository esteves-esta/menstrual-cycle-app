import React, { useState } from 'react';
import { Animated } from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import { Card, DrawerHandle, Footer } from './styles';
import { Overline, Title } from 'styles/mainStyles';

let amplified = false;

const CalendarFooter: React.FC = () => {
  const [translateY] = useState(new Animated.Value(0));
  const [modalDisplayed, setModalDisplayed] = useState(false);

  const onGestureEvent = (event: PanGestureHandlerGestureEvent) => {
    if (event.nativeEvent.translationY < 0 && !amplified) {
      amplified = true;
      Animated.timing(translateY, {
        toValue: -100,
        duration: 100,
        useNativeDriver: true,
      }).start();
    } else if (event.nativeEvent.translationY >= 0 && amplified) {
      amplified = false;
      Animated.timing(translateY, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start();
    }
    setModalDisplayed(amplified);
  };

  return (
    <>
      {/* <PanGestureHandler {...{ onGestureEvent }}>
        <Card
          style={[
            {
              transform: [{ translateY }],
            },
          ]}>
          <DrawerHandle />
          <Overline>asdf</Overline>
          <Title>Sintomas</Title>
        </Card>
      </PanGestureHandler> */}
      <Footer />
    </>
  );
};

export default CalendarFooter;
