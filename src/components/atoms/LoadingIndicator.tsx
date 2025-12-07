import { ActivityIndicator, View } from 'react-native';
import { $styles } from '../../theme/styles';
import { colors } from '../../theme/colors';

const LoadingIndicator = () => {
  return (
    <View style={[$styles.colCenter, $styles.wFull]}>
      <ActivityIndicator size={'large'} color={colors.red01} />
    </View>
  );
};

export default LoadingIndicator;
