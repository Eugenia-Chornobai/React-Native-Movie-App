import Form from '../forms/Form'
import { useState } from 'react'
import Loading from '../layout/Loading'
import { getRecipes } from '../../services/api'
import MoviesList from '../lists/MoviesList'
import { Tab, Text, TabView } from '@rneui/themed';
import MoviesTab from '../layout/MoviesTab'
import SearchTab from '../layout/SearchTab'


const fetchedRecipes = [
];

const MainContainer = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [ingredient, setIngredient] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [index, setIndex] = useState(0);

  const { navigation } = props;

  const fetchRecipes = () => {
    setIsLoading(true);
    setRecipes(fetchedRecipes);
    setIsLoading(false);
    
    // Bypass the API call for now

    // getRecipes(ingredient).then(
    //   (recipes) => {
    //   setRecipes(recipes);
    //   console.log(recipes.data.hits);
    //   setIsLoading(false);
    // },
    //   (error) => {
    //     alert('Error', `Something went wrong! ${error}`);
    //     setIsLoading(false);
    //   }
    // )
  }

  const handleInputChange = (ingredient) => {
    setIngredient(ingredient);
  }

  const mainColor = '#2c3e50';

  return (
    <>
      <Tab
        scrollable={false}
        value={index}
        onChange={(e) => setIndex(e)}
        containerStyle={{
          backgroundColor: 'white',
        }}
        indicatorStyle={{
          backgroundColor: mainColor,
          height: 3,
        }}
        variant="primary"
      >
        <Tab.Item
          title="Movies"
          titleStyle={(active) => ({ color: active? mainColor : 'grey', fontSize: 12 }) }
        />
        <Tab.Item
          title="Search Results"
          titleStyle={(active) => ({ color: active? mainColor : 'grey', fontSize: 12 }) }
        />
        <Tab.Item
          title="TV Shows"
          titleStyle={(active) => ({ color: active? mainColor : 'grey', fontSize: 12 }) }
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ width: '100%' }}>
          <MoviesTab type={'movies'} navigation={navigation} />
        </TabView.Item>
        <TabView.Item style={{ width: '100%' }}>
          <SearchTab navigation={navigation} />
        </TabView.Item>
        <TabView.Item style={{ width: '100%' }}>
          <MoviesTab type={'tv'} navigation={navigation} />
        </TabView.Item>
      </TabView>
    </>

  );
}

export default MainContainer;
