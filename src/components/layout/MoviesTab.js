import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "@rneui/themed";
import { useState, useEffect } from 'react'
import RNPickerSelect from 'react-native-picker-select';
import { AntDesign } from '@expo/vector-icons';
import { getMovies, getShows } from '../../services/api' 
import MoviesList from "../lists/MoviesList";

const MoviesTab = (props) => {

  const { type, navigation } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [selectedMovieOption, setSelectedMovieOption] = useState('popular');
  const [selectedShowOption, setSelectedShowOption] = useState('popular');
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);

  useEffect(() => {
    type === 'movies' ? loadMovies(selectedMovieOption) : loadShows(selectedShowOption);
  }, []);

  const movieOptions = [
    { label: 'Now playing', value: 'now_playing' },
    { label: 'Popular', value: 'popular' },
    { label: 'Top rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' },
  ];

  const showOptions = [
    { label: 'Popular', value: 'popular' },
    { label: 'Airing today', value: 'airing_today' },
    { label: 'Top rated', value: 'top_rated' },
    { label: 'On The Air', value: 'on_the_air' },
  ];

  const handleOptionSelect = (value) => {
    if (type === 'movies') {
      setSelectedMovieOption(value);
      loadMovies(selectedMovieOption);
    } else {
      setSelectedShowOption(value);
      loadShows(selectedShowOption);
    }
  }

  const loadMovies = (option) => {
    setIsLoading(true);
    setMovies([]);
    getMovies(option).then((movies) => {
        console.log('Movies loaded');
        setMovies(movies);
        setIsLoading(false);
      },
      (error) => {
        alert('Error', `Something went wrong! ${error}`);
      }
    )
  }

  const loadShows = (option) => {
    setIsLoading(true);
    setShows([]);
    getShows(option).then((shows) => {
        console.log('Shows loaded');
        setShows(shows);
        setIsLoading(false);
      },
      (error) => {
        alert('Error', `Something went wrong! ${error}`);
      }
    )
  }

  return (
    <View style={styles.mainContainer}>

      <View style={{ marginTop: 50 }}>
        <RNPickerSelect
            placeholder={{}}
            items={ type === 'movies' ? movieOptions : showOptions }
            onValueChange={value => {
              handleOptionSelect(value)
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
            value={type === 'movies' ? selectedMovieOption : selectedShowOption}
            Icon={() => {
              return <AntDesign name="down" size={24} color="gray" />;
            }}
          />  
      </View>

      <View style={ {width: '100%', paddingLeft: 20, paddingTop: 20 } }>
        { type === 'movies' ? 
          <MoviesList items={movies} navigation={props.navigation} /> :
          <MoviesList items={shows} navigation={props.navigation} />
        }
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    width: '100%'
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: 200,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30
  }
});

export default MoviesTab;
