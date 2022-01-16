import { StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import CockTailList from '../components/CockTailList';
import { getData } from '../utils/fetchInstance';
import { API_ENDPOINT } from '../constants';

export default function DBItemsScreen() {
  const [cocktailList, setCocktailList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const fetchCockTail = async () => {
    try {
      setRefreshing(true);
      let result = await getData(`${API_ENDPOINT}/cocktail`);
      setCocktailList(result.data);
      setRefreshing(false);
    } catch (err) {
      console.log(err);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchCockTail();
  }, []);

  return (
    <View style={styles.container}>
      <CockTailList data={cocktailList} refreshing={refreshing} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d2862',
  },
});
