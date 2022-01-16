import {
  StyleSheet,
  TextInput,
  View,
  Button,
  StatusBar,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import CockTailList from '../components/CockTailList';
import { getData, postData } from '../utils/fetchInstance';
import { API_ENDPOINT, COCKTAIL_API_ENDPOINT } from '../constants/index';
import ItemSavedModal from '../components/ItemSavedModal';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function MainScreen(props) {
  const [searchText, setSearchText] = useState('');
  const [cocktailList, setCocktailList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [showModal, setShowModal] = useState({
    status: false,
    message: '',
    success: false,
  });
  const [loading, setLoading] = useState(false);

  const fetchCockTail = async () => {
    try {
      setRefreshing(true);
      let { drinks } = await getData(
        `${COCKTAIL_API_ENDPOINT}?s=${searchText}`,
      );
      if (drinks && drinks.length > 0)
        setCocktailList(
          drinks.map(result => ({
            image: result.strDrinkThumb,
            name: result.strDrink,
            id: result.idDrink,
          })),
        );
      else setCocktailList([]);
      setRefreshing(false);
    } catch (err) {
      console.log(err);
      setRefreshing(false);
    }
  };

  const addToDatabase = async item => {
    try {
      setLoading(true);
      const result = await postData(`${API_ENDPOINT}/cocktail`, { item: item });
      setShowModal({ status: true, message: result.message, success: true });
      setLoading(false);
    } catch (err) {
      setShowModal({ status: true, message: err.message, success: false });
      setLoading(false);
    }
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View style={styles.searchBox}>
          <TextInput
            style={styles.searchInput}
            onChangeText={setSearchText}
            placeholder='Search by name...'
            onEndEditing={fetchCockTail}
            placeholderTextColor='#d1d0db'
          />
          <AntDesign
            style={styles.searchIcon}
            name='search1'
            size={24}
            color='black'
            onPress={fetchCockTail}
          />
        </View>
        <View style={styles.buttonDiv}>
          <Button
            style={styles.fetchButton}
            onPress={() => props.navigation.navigate('DB')}
            title='Fetch from DB'
            color={'#1eb6bf'}
          ></Button>
        </View>
        <CockTailList
          addToDatabase={addToDatabase}
          data={cocktailList}
          refreshing={refreshing}
        />
        {showModal.status && (
          <ItemSavedModal show={showModal} setShow={setShowModal} />
        )}
        {loading && (
          <ActivityIndicator
            color='white'
            size='large'
            style={{ marginBottom: 0, backgroundColor: 'transparent' }}
          />
        )}
        <StatusBar style={'light'} backgroundColor='#1d2862' />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d2862',
    flexDirection: 'column',
  },
  searchBox: {
    borderWidth: 1,
    opacity: 0.8,
    height: 50,
    paddingVertical: 2,
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 2,
  },
  searchInput: {
    fontSize: 20,
    flex: 1,
    color: 'white',
  },
  placeholderStyle: {
    color: 'white',
  },
  buttonDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  fetchButton: {
    width: 100,
  },
  searchIcon: {
    color: 'white',
  },
});
