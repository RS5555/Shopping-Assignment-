// constants.js
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const screenWidth = width;
export const screenHeight = height;

export const padding = 0.05; // 5% of the screen width
export const borderRadius = 0.03; // 3% of the screen width
export const fontSize = 0.04; // 4% of the screen width
export const buttonTextSize = 0.035; // 3.5% of the screen width

export const colors = {
  primary: '#3498db',
  background: '#f5f5f5',
  cardBackground: '#ffffff',
  text: '#333333',
  textSecondary: '#777777',
  price: '#e74c3c',
  // Add any additional colors as needed
};
