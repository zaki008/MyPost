import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Greeting from '../molecules/Greeting';
import { Button } from '../atoms';
import { $styles } from '../../theme/styles';
import { $spacingStyles } from '../../theme/spacing';
import { colors } from '../../theme/colors';
import { $typographyVariants } from '../../theme/fontSize';

interface IProps {
  title?: string;
  onLogout?: () => void;
  email?: string;
}

const HeaderHome = ({ title = 'Home', onLogout, email }: IProps) => {
  return (
    <View
      style={[
        $styles.rowCenterBetween,
        $spacingStyles.pxLg,
        $spacingStyles.pyLg,
        styles.container,
      ]}
    >
      <Greeting title={title} email={email} />
      <Button title="Logout" onPress={onLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: colors.gray02,
  },
});

export default HeaderHome;
