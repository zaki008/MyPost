import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { $typographyVariants } from '../../theme/fontSize';
import { colors } from '../../theme/colors';
import { $spacingStyles } from '../../theme/spacing';
import { $radiusStyles } from '../../theme/radius';
import { $styles } from '../../theme/styles';

interface IProps {
  title: string;
  desc: string;
  onPress?: (params?: any) => void;
  type?: 'list' | 'detail';
}

const CardPost = ({ title, desc, onPress, type = 'list' }: IProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        $spacingStyles.pLg,
        $radiusStyles.md,
        $spacingStyles.mbLg,
      ]}
    >
      <Text
        style={[
          $typographyVariants.bold.lg,
          $spacingStyles.mbSm,
          { color: colors.black01 },
        ]}
        {...(type === 'list'
          ? { numberOfLines: 1, ellipsizeMode: 'tail' }
          : {})}
      >
        {title}
      </Text>
      <Text
        style={[
          $typographyVariants.medium.md,
          { color: colors.black01, opacity: 0.8 },
        ]}
        {...(type === 'list'
          ? { numberOfLines: 3, ellipsizeMode: 'tail' }
          : {})}
      >
        {desc}
      </Text>
    </TouchableOpacity>
  );
};

export default CardPost;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cream01,
    borderWidth: 1,
    borderColor: colors.cream02,
  },
});
