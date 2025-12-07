import React from 'react';
import { Text, View } from 'react-native';
import { $typographyVariants } from '../../theme/fontSize';
import { colors } from '../../theme/colors';
import { getGreeting } from '../../utils/storage/helperGeneral';

interface IProps {
  title: string;
  email?: string;
}

const Greeting = ({ title, email }: IProps) => {
  return (
    <View>
      <Text style={[$typographyVariants.bold.xl, { color: colors.red01 }]}>
        {title}
      </Text>
      <Text
        style={[$typographyVariants.medium.md, { color: colors.black01 }]}
      >{`Email : ${email}`}</Text>
      <Text style={[$typographyVariants.bold.lg, { color: colors.gray01 }]}>
        {getGreeting()}
      </Text>
    </View>
  );
};

export default Greeting;
