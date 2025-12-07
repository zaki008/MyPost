import { Easing, FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { $styles } from '../../theme/styles';
import { CardPost, HeaderHome } from '../../components';
import { $spacingStyles } from '../../theme/spacing';
import { useEffect, useState } from 'react';
import { getPosts } from '../../service/api';
import TitleSection from '../../components/molecules/TitleSection';
import { $typographyVariants } from '../../theme/fontSize';
import { colors } from '../../theme/colors';
import LoadingIndicator from '../../components/atoms/LoadingIndicator';
import { getData, removeItemValue } from '../../utils/storage';
import { decodeJWT } from '../../utils/storage/jwtHelper';
import { NavigationProp } from '@react-navigation/native';
import { AlertShow } from '../../utils/AllertShow';
import NotFound from '../../components/atoms/NotFound';

interface IProps {
  navigation: NavigationProp<any>;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const HomeScreen = ({ navigation }: IProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const [email, setEmail] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const getDataLocal = async () => {
    try {
      const token = await getData('token');
      const decoded = decodeJWT(token);
      setEmail(decoded?.email || '');
    } catch (err) {
      console.log('err', err);
    }
  };

  const getDataPost = async () => {
    try {
      const data = await getPosts();
      console.log('data', data);
      setPosts(data);
    } catch (err) {
      console.error('Error fetching posts:', err);
    } finally {
      setIsRefreshing(false);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDataLocal();
    getDataPost();
  }, []);

  const handleLogout = async () => {
    try {
      await removeItemValue('token');
      navigation.navigate('LoginScreen');
    } catch (err) {
      AlertShow('Gagal');
    }
  };

  const onRefresh = () => {
    setIsRefreshing(true);
    setPosts([]);
    getDataPost();
  };

  return (
    <SafeAreaView style={$styles.page}>
      <HeaderHome title="MyPost" email={email} onLogout={handleLogout} />
      <View style={[$styles.flex1, $spacingStyles.pLg]}>
        <TitleSection title={'List Post'} />
        {isLoading || isRefreshing ? (
          <LoadingIndicator />
        ) : (
          <FlatList
            data={posts}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <CardPost
                title={item.title}
                desc={item.body}
                onPress={() =>
                  navigation.navigate('DetailPost', { id: item.id })
                }
              />
            )}
            contentContainerStyle={$spacingStyles.pbXxl}
            ListEmptyComponent={() => <NotFound />}
            refreshing={isRefreshing}
            onRefresh={onRefresh}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
