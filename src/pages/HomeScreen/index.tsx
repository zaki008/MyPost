import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { $styles } from '../../theme/styles';
import { CardPost, HeaderHome } from '../../components';
import { $spacingStyles } from '../../theme/spacing';
import { useEffect, useState } from 'react';
import { getPosts } from '../../service/api';
import TitleSection from '../../components/molecules/TitleSection';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);

  const getDataPost = async () => {
    try {
      const data = await getPosts();
      console.log('data', data);
      setPosts(data);
    } catch (err) {
      console.error('Error fetching posts:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDataPost();
  }, []);

  return (
    <SafeAreaView style={$styles.page}>
      <HeaderHome title="MyPost" />
      <View style={$spacingStyles.pLg}>
        <TitleSection title={'List Post'} />
        {isLoading ? null : (
          <FlatList
            data={posts}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <CardPost title={item.title} desc={item.body} />
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
