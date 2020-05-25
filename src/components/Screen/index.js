import React from 'react';
import { Dimensions, StyleSheet, Text } from 'react-native';
import { mix } from 'react-native-redash';
import Animated from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Container } from './styles';

const { width } = Dimensions.get('window');
const alpha = Math.PI / 4;
const perspective = { perspective: 1000 };

export default function Screen({ open, transition }) {
  const rotateY = mix(transition, 0, -alpha);
  const scale = mix(transition, 1, 0.9);
  const opacity = mix(transition, 0, 0.5);
  const borderRadius = mix(transition, 0, 20);

  return (
    <>
      <Animated.View
        style={[
          styles.container,
          {
            borderRadius,
            transform: [
              perspective,
              { translateX: width / 2 },
              { rotateY },
              { translateX: -width / 2 },
              { scale },
            ],
          },
        ]}
      >
        <TouchableOpacity onPress={() => open.setValue(1)}>
          <Animated.View style={styles.button}>
            <Text style={styles.label}>Show Menu</Text>
          </Animated.View>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View
        pointerEvents="none"
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: 'black',
          opacity,
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: '#F6F5F9',
  },
  button: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
  },
});
