import React from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { $typographyVariants } from '../../theme/fontSize';
import { colors } from '../../theme/colors';
import { $radiusStyles } from '../../theme/radius';
import { $spacingStyles } from '../../theme/spacing';

interface ButtonProps {
  onPress?: () => void;
  stylesContainer?: StyleProp<ViewStyle>;
  stylesButton?: StyleProp<ViewStyle>;
  stylesText?: StyleProp<TextStyle>;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  colorLoading?: string;
  title?: string;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  stylesContainer,
  stylesButton,
  stylesText,
  disabled = false,
  loading = false,
  icon,
  colorLoading,
  title = '',
}) => {
  const Icons = () => {
    return (
      <>
        {loading ? (
          <ActivityIndicator size="small" color={colorLoading || '#fff'} />
        ) : (
          <Text
            style={[
              $typographyVariants.bold.lg,
              { color: colors.white01, textAlign: 'center' },
              stylesText,
            ]}
          >
            {title}
          </Text>
        )}

        {icon && <View>{icon}</View>}
      </>
    );
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={stylesContainer}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <View
        style={[
          $radiusStyles.lg,
          $spacingStyles.pSm,
          {
            borderWidth: 1,
            borderColor: colors.red01,
            backgroundColor: colors.red01,
          },
          stylesButton,
        ]}
      >
        {Icons()}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
