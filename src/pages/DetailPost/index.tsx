import { SafeAreaView } from 'react-native-safe-area-context';
import { $styles } from '../../theme/styles';
import { RefreshControl, ScrollView, Text, View } from 'react-native';
import HeaderPrimary from '../../components/organisms/HeaderPrimary';
import { NavigationProp } from '@react-navigation/native';
import { $spacingStyles } from '../../theme/spacing';
import { CardPost } from '../../components';
import { getPostById } from '../../service/api';
import { useCallback, useEffect, useState } from 'react';
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
  const [refreshing, setRefreshing] = useState(false);

  const getDataPostById = async (id: number | string) => {
    try {
      const data = await getPostById(id);
      console.log('data', data);
      setData(data);
    } catch (err) {
      console.error('Error fetching posts:', err);
    } finally {
      setRefreshing(false);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDataPostById(id);
  }, [id]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setData(null);
    getDataPostById(id);
  }, [id]);

  return (
    <SafeAreaView style={$styles.page}>
      <HeaderPrimary title="Detail Post" onBack={() => navigation.goBack()} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
        }
      >
        <View style={$spacingStyles.pLg}>
          {isLoading || refreshing ? (
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailPost;
