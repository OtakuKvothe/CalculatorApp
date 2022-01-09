/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { View } from 'react-native';

export default ({ children }) => (
    <View style={{ flexDirection: 'row' }}>{children}</View>
);
