import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Button,
} from 'react-native';

export default function Card(props) {
  const { item, addToDatabase } = props;
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <Image
          source={{
            uri: item.image,
          }}
          style={styles.cardImage}
        />
        <Text style={styles.cardTitle}>{item.name}</Text>
        <View style={styles.buttonDiv}>
          {addToDatabase && (
            <Button
              style={styles.fetchButton}
              color={'#1eb6bf'}
              onPress={() => addToDatabase && addToDatabase(item)}
              title='ADD TO DB'
            ></Button>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'column',
    borderTopWidth: 2,
    borderColor: '#eee',
    marginBottom: 10,
    paddingBottom: 10,
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardTitle: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 5,
    color: 'white',
    textTransform: 'uppercase',
  },
  buttonDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  fetchButton: {
    width: 100,
  },
});
