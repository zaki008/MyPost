import { Text, TouchableOpacity, View } from 'react-native';
import { $styles } from '../../theme/styles';
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';
import { colors } from '../../theme/colors';
import { $typographyVariants } from '../../theme/fontSize';
import { $spacingStyles } from '../../theme/spacing';

interface IProps {
  onBack?: () => void;
  title?: string;
}

const HeaderPrimary = ({ onBack, title }: IProps) => {
  return (
    <View
      style={[
        $styles.rowCenterBetween,
        $spacingStyles.pyMd,
        $spacingStyles.pxMd,
        { backgroundColor: colors.red01 },
      ]}
    >
      {onBack ? (
        <TouchableOpacity onPress={onBack}>
          <FontAwesome6
            iconStyle="solid"
            name={'arrow-left-long'}
            size={20}
            color={colors.white01}
          />
        </TouchableOpacity>
      ) : (
        <View />
      )}
      {title && (
        <Text
          style={[
            $typographyVariants.bold.xl,
            { color: colors.white01, marginLeft: -8 },
          ]}
        >
          {title}
        </Text>
      )}
      <View />
    </View>
  );
};

export default HeaderPrimary;
