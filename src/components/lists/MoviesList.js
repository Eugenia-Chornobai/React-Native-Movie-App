import { FlatList, StyleSheet, View } from 'react-native';
import MovieCard from '../listItems/MovieCard';

const MoviesList = ({ items, navigation }) => {


  return (
    <View style={styles.mainContainer}>
      <FlatList
        style={styles.listContainer}
        data={items}
        renderItem={({ item }) => (
          <MovieCard item={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
  },
  listContainer: {
    paddingRight: 20,
  }
});


export default MoviesList;
