import { Text, TouchableOpacity, View } from 'react-native';
import { $styles } from '../../theme/styles';
import { $typographyVariants } from '../../theme/fontSize';
import { colors } from '../../theme/colors';
import { $spacingStyles } from '../../theme/spacing';

interface IProps {
  title: string;
  link?: string;
  onPressLink?: () => void;
}

const TitleSection = ({ title, link, onPressLink }: IProps) => {
  return (
    <View style={[$styles.rowCenterBetween, $spacingStyles.mbLg]}>
      <Text style={[$typographyVariants.bold.xl]}>{title}</Text>
      {onPressLink && (
        <TouchableOpacity onPress={onPressLink}>
          <Text
            style={[$typographyVariants.medium.md, { color: colors.red01 }]}
          >
            {link}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TitleSection;
