import { View, StyleSheet, Keyboard } from "react-native";
import { Text } from "@rneui/themed";
import { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { AntDesign } from "@expo/vector-icons";
import { getSearchResults } from "../../services/api";
import MoviesList from "../lists/MoviesList";
import Form from "../forms/Form";
import { Button } from "@rneui/themed";

const SearchTab = (props) => {
  const { navigation } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("multi");
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");

  const searchOptions = [
    { label: "Multi", value: "multi" },
    { label: "Movies", value: "movie" },
    { label: "TV Shows", value: "tv" },
  ];

  const searchItems = () => {
    setIsLoading(true);
    setItems([]);
    console.log(selectedOption, query);
    getSearchResults(selectedOption, query).then((items) => {
      console.log("Items loaded");
      setItems(items);
      setIsLoading(false);
      Keyboard.dismiss();
    });
  };

  return (
    <View
      style={{
        ...styles.mainContainer,
        marginTop: items?.length > 0 ? 112 : 0,
      }}
    >
      <Form onInputChange={(query) => setQuery(query)} />

      <View style={{ width: "76%", marginBottom: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "grey" }}>
          Choose Search Type:
        </Text>
      </View>

      <View style={styles.pickerContainer}>
        <RNPickerSelect
          placeholder={{}}
          items={searchOptions}
          onValueChange={(value) => {
            setSelectedOption(value);
          }}
          style={{
            ...pickerSelectStyles,
            iconContainer: {
              top: 10,
              right: 12,
              marginLeft: 10,
              paddingLeft: 10,
            },
          }}
          value={selectedOption}
          Icon={() => {
            return <AntDesign name="down" size={24} color="gray" />;
          }}
        />
        <Button
          buttonStyle={{ marginLeft: 10, backgroundColor: "teal" }}
          radius={"sm"}
          disabled={query === ""}
          onPress={() => searchItems()}
          color={"primary"}
          type="solid"
        >
          Search
        </Button>
      </View>
      <View style={{ width: "76%", marginBottom: 20, marginTop: 10 }}>
        <Text style={{ fontSize: 12, color: "grey" }}>
          Please select a search type
        </Text>
      </View>

      {items?.length === 0 ? (
        <Text style={{ paddingVertical: 30 }} h4>
          {" "}
          Please initiate search.{" "}
        </Text>
      ) : (
        <MoviesList items={items} navigation={props.navigation} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingLeft: 10,
  },
  pickerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    justifyContent: "center",
    width: "80%",
  },
  label: {
    textAlign: "left",
    marginTop: 10,
    marginBottom: 10,
  },
  resultsContainer: {
    backgroundColor: "green",
    width: "100%",
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: 200,
    fontSize: 16,
    paddingVertical: 9,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 4,
    color: "black",
    paddingRight: 30,
  },
});

export default SearchTab;
