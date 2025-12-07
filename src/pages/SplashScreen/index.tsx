import { SafeAreaView } from 'react-native-safe-area-context';
import { $styles } from '../../theme/styles';
import { Text, View } from 'react-native';
import { colors } from '../../theme/colors';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { $typographyVariants } from '../../theme/fontSize';
import { $spacingStyles } from '../../theme/spacing';
import { useEffect } from 'react';
import { getData } from '../../utils/storage';
import { NavigationProp } from '@react-navigation/native';
import { AlertShow } from '../../utils/AllertShow';
import { isExpired } from '../../utils/storage/jwtHelper';

interface IProps {
  navigation: NavigationProp<any>;
}

const SplashScreen = ({ navigation }: IProps) => {
  useEffect(() => {
    setTimeout(() => {
      getDataLocal();
    }, 3000);
  }, []);

  const getDataLocal = async () => {
    try {
      const token = await getData('token');
      if (!token || isExpired(token)) {
        return navigation.navigate('LoginScreen');
      }
      return navigation.navigate('HomeScreen');
    } catch (err) {
      AlertShow('Terjadi Kesalahan', 'danger');
    }
  };

  return (
    <SafeAreaView style={$styles.page}>
      <View style={[$styles.flex1, $styles.center]}>
        <Ionicons name={'newspaper-outline'} size={55} color={colors.red01} />
        <Text style={[$typographyVariants.bold.xxl, $spacingStyles.mtLg]}>
          MyPost
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
