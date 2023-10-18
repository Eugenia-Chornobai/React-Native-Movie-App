import { useState } from "react";
import { Tab, TabView } from "@rneui/themed";
import MoviesTab from "../layout/MoviesTab";
import SearchTab from "../layout/SearchTab";

const MainContainer = (props) => {
  const [index, setIndex] = useState(0);
  const { navigation } = props;
  const mainColor = "#2c3e50";

  return (
    <>
      <Tab
        scrollable={false}
        value={index}
        onChange={(e) => setIndex(e)}
        containerStyle={{
          backgroundColor: "white",
        }}
        indicatorStyle={{
          backgroundColor: mainColor,
          height: 3,
        }}
        variant="primary"
      >
        <Tab.Item
          title="Movies"
          titleStyle={(active) => ({
            color: active ? mainColor : "grey",
            fontSize: 12,
          })}
        />
        <Tab.Item
          title="Search Results"
          titleStyle={(active) => ({
            color: active ? mainColor : "grey",
            fontSize: 12,
          })}
        />
        <Tab.Item
          title="TV Shows"
          titleStyle={(active) => ({
            color: active ? mainColor : "grey",
            fontSize: 12,
          })}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ width: "100%" }}>
          <MoviesTab type={"movies"} navigation={navigation} />
        </TabView.Item>
        <TabView.Item style={{ width: "100%" }}>
          <SearchTab navigation={navigation} />
        </TabView.Item>
        <TabView.Item style={{ width: "100%" }}>
          <MoviesTab type={"tv"} navigation={navigation} />
        </TabView.Item>
      </TabView>
    </>
  );
};

export default MainContainer;
