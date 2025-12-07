import React from 'react';
import { View, StyleSheet } from 'react-native';
import Greeting from '../molecules/Greeting';
import { Button } from '../atoms';
import { $styles } from '../../theme/styles';
import { $spacingStyles } from '../../theme/spacing';
import { colors } from '../../theme/colors';

interface IProps {
  title?: string;
  onLogout?: () => void;
}

const HeaderHome = ({ title = 'Home', onLogout }: IProps) => {
  return (
    <View
      style={[
        $styles.rowCenterBetween,
        $spacingStyles.pxLg,
        $spacingStyles.pyLg,
        styles.container,
      ]}
    >
      <Greeting title={title} />
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
