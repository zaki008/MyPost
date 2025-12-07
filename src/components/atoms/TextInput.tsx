import React, { useState } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput as InputRN,
  TextStyle,
  View,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { colors } from '../../theme/colors';
import { $spacingStyles } from '../../theme/spacing';
import { $fontSizeStyles, $typographyVariants } from '../../theme/fontSize';
import { $radiusStyles } from '../../theme/radius';

interface Props extends TextInputProps {
  label?: string;
  stylesTextInput?: StyleProp<TextStyle>;
  stylesLabel?: StyleProp<TextStyle>;
  errors?: string;
}

const TextInput: React.FC<Props> = ({
  label,
  placeholder,
  stylesTextInput,
  stylesLabel,
  errors,
  secureTextEntry,
  ...restProps
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const isPassword = secureTextEntry === true;

  return (
    <View style={$spacingStyles.mbLg}>
      {/* Label */}
      {label && (
        <Text
          style={[
            $typographyVariants.medium.md,
            { color: colors.black02 },
            stylesLabel,
          ]}
        >
          {label}
        </Text>
      )}

      {/* Input wrapper (biar icon bisa masuk) */}
      <View style={styles.inputWrapper}>
        <InputRN
          style={[
            $spacingStyles.pyMd,
            $spacingStyles.pxSm,
            $radiusStyles.md,
            $typographyVariants.medium.sm,
            styles.textInput,
            stylesTextInput,
            // Tambahkan padding right lebih besar kalau ada icon
            isPassword && { paddingRight: 40 },
          ]}
          placeholder={placeholder}
          placeholderTextColor={colors.gray03}
          secureTextEntry={isPassword ? !isPasswordVisible : false}
          {...restProps}
        />

        {/* Eye Icon */}
        {isPassword && (
          <TouchableOpacity
            style={styles.iconWrapper}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons
              name={isPasswordVisible ? 'eye-off' : 'eye'}
              size={20}
              color={colors.gray02}
            />
          </TouchableOpacity>
        )}
      </View>

      {/* Error Message */}
      {errors && (
        <Text style={[{ color: colors.red01, marginTop: 4 }]}>{errors}</Text>
      )}
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  inputWrapper: {
    position: 'relative',
  },
  textInput: {
    borderWidth: 1,
    borderColor: colors.gray01,
    minHeight: 48,
    color: colors.black02,
  },
  iconWrapper: {
    position: 'absolute',
    right: 12,
    top: '50%',
    transform: [{ translateY: -10 }],
  },
});
