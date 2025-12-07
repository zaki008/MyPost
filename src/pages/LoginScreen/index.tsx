import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { $styles } from '../../theme/styles';
import { LoginForm } from '../../components';
import { useForm } from 'react-hook-form';
import { $spacingStyles } from '../../theme/spacing';
import { $typographyVariants } from '../../theme/fontSize';
import { colors } from '../../theme/colors';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { generateJWTByEmail } from '../../utils/storage/jwtHelper';
import { storeData } from '../../utils/storage';
import { AlertShow } from '../../utils/AllertShow';
import { NavigationProp } from '@react-navigation/native';

interface IProps {
  navigation: NavigationProp<any>;
}

interface LoginParams {
  email: string;
  password: string;
}

const LoginScreen = ({ navigation }: IProps) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginParams) => {
    try {
      const token = generateJWTByEmail(data.email);
      await storeData('token', token);
      AlertShow('Login is Successfully', 'success');
      navigation.navigate('HomeScreen');
    } catch (err) {
      AlertShow('Login is Failed', 'danger');
    }
  };

  return (
    <SafeAreaView style={$styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={$spacingStyles.pLg}>
          <Ionicons name={'newspaper-outline'} size={55} color={colors.red01} />
          <Text style={[$typographyVariants.bold.xxxl, $spacingStyles.myLg]}>
            Login Screen
          </Text>
          <LoginForm control={control} onSubmit={handleSubmit(onSubmit)} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
