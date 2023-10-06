import { Button, Card, Text, Image } from "@rneui/themed";
import { StyleSheet, View } from "react-native";


const MovieCard = (props) => {

  const { item, navigation } = props;

  return (
    <View style={layout.container}>
      <Image style={layout.image} source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} />
      <View style={layout.body}>
        <Text style={styles.title}>{ item.original_title || item.original_name }</Text>
        <Text>Popularity: { item.popularity }</Text>
        <Text>Release Date: { item.release_date }</Text>
        <Button buttonStyle={styles.buttonStyle} title="More Details" radius={'sm'} onPress={() => {
            navigation.navigate('Show', { item: item })
          }}
        />
      </View>
    </View>
  )
}

const layout = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  image: {
    flex: 1,
    minWidth: 100,
    marginRight: 10
  },
  body: {
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }
});

const styles = StyleSheet.create({
  image: {
    padding: 0
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  text: {
    marginTop: 10
  },
  buttonStyle: {
    marginTop: 10,
    backgroundColor: 'teal'
  }
});

export default MovieCard;
