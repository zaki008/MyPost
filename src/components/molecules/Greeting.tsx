import React from 'react';
import { Text, View } from 'react-native';
import { $typographyVariants } from '../../theme/fontSize';
import { colors } from '../../theme/colors';
import { getGreeting } from '../../utils/storage/helperGeneral';

interface IProps {
  title: string;
}

const Greeting = ({ title }: IProps) => {
  return (
    <View>
      <Text style={[$typographyVariants.bold.xl, { color: colors.red01 }]}>
        {title}
      </Text>
      <Text style={[$typographyVariants.bold.lg, { color: colors.gray01 }]}>
        {getGreeting()}
      </Text>
    </View>
  );
};

export default Greeting;
