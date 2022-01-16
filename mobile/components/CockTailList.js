import { ActivityIndicator, FlatList, StyleSheet, Text } from 'react-native';
import Card from './Card';

export default function CockTailList(props) {
  const { data, refreshing, addToDatabase } = props;
  return (
    <FlatList
      keyExtractor={result => result.id}
      data={data}
      renderItem={({ item }) => (
        <Card addToDatabase={addToDatabase} item={item} />
      )}
      ListEmptyComponent={() =>
        !refreshing ? (
          <Text style={styles.noData}>No any cocktails found.</Text>
        ) : (
          <Text></Text>
        )
      }
      refreshing={refreshing}
      onRefresh={() => <ActivityIndicator />}
    ></FlatList>
  );
}

const styles = StyleSheet.create({
  noData: {
    textAlign: 'center',
    marginTop: 20,
    color: 'white',
    fontSize: 18,
  },
});
