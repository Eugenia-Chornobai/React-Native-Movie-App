import { Text, Image } from "@rneui/themed";
import { View, StyleSheet } from "react-native";

const DetailContainer = ({ navigation, route }) => {
  const { item } = route.params;

  return (
    <View>
      <View style={styles.detailContainer}>
        <View style={styles.detailContainerItem}>
          <Text h3>{item.original_title || item.original_name}</Text>
        </View>
        <Image
          style={{ width: "100%", height: 300 }}
          source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        />
        <View style={styles.detailContainerItem}>
          <Text>{item.overview}</Text>
        </View>
        <View style={styles.detailContainerItem}>
          <Text>
            Popularity: {item.popularity} | Release Date: {item.release_date}{" "}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: 50,
    paddingRight: 50,
  },
  detailContainerItem: {
    marginBottom: 20,
    marginTop: 20,
  },
});

export default DetailContainer;
