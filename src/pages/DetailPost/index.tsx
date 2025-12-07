import { SafeAreaView } from 'react-native-safe-area-context';
import { $styles } from '../../theme/styles';
import { Text, View } from 'react-native';
import HeaderPrimary from '../../components/organisms/HeaderPrimary';
import { NavigationProp } from '@react-navigation/native';
import { $spacingStyles } from '../../theme/spacing';
import { CardPost } from '../../components';
import { getPostById } from '../../service/api';
import { useEffect, useState } from 'react';
import { Post } from '../HomeScreen';
import LoadingIndicator from '../../components/atoms/LoadingIndicator';
import NotFound from '../../components/atoms/NotFound';

interface IProps {
  navigation: NavigationProp<any>;
  route: any;
}

const DetailPost = ({ navigation, route }: IProps) => {
  const { id } = route?.params;
  const [data, setData] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getDataPostById = async () => {
    try {
      const data = await getPostById(id);
      console.log('data', data);
      setData(data);
    } catch (err) {
      console.error('Error fetching posts:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDataPostById();
  }, []);

  return (
    <SafeAreaView style={$styles.page}>
      <HeaderPrimary title="Detail Post" onBack={() => navigation.goBack()} />
      <View style={$spacingStyles.pLg}>
        {isLoading ? (
          <LoadingIndicator />
        ) : data && data.title ? (
          <CardPost
            title={data?.title || ''}
            desc={data?.body || ''}
            type="detail"
          />
        ) : (
          <NotFound />
        )}
      </View>
    </SafeAreaView>
  );
};

export default DetailPost;
