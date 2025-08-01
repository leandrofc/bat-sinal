import React from 'react';
import { View, Text, Image } from 'react-native';

import batLogo from '../../../assets/batLogo.png';
import batLogoSmall from '../../../assets/batLogoSmall.png';
import { BatLogoProps } from './index.types';
import { styles } from './index.styles';

export function BatLogo({ isSmall = false }: BatLogoProps) {
  return (
    <Image
      source={isSmall ? batLogoSmall : batLogo}
      style={isSmall && styles.smallImage}
    />
  );
}