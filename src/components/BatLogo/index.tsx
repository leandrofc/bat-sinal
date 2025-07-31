import React from 'react';
import { View, Text, Image } from 'react-native';

import batLogo from '../../../assets/batLogo.png';

export function BatLogo() {
  return (
    <Image source={batLogo} />
  );
}