import { Text, View } from 'react-native';
import { $typographyVariants } from '../../theme/fontSize';
import { colors } from '../../theme/colors';
import { $styles } from '../../theme/styles';

const NotFound = () => {
  return (
    <View style={[$styles.colCenter, $styles.wFull]}>
      <Text
        style={[
          $typographyVariants.bold.lg,
          { color: colors.black01, textAlign: 'center' },
        ]}
      >
        Data tidak ditemukan
      </Text>
    </View>
  );
};

export default NotFound;
