import { StyleSheet, SafeAreaView, FlatList} from 'react-native';
import {DATA} from './Data.js';
import Constants from 'expo-constants';
import Row from './Row.js';
import Search from './Search.js';
import React, {useState, useEffect} from 'react';

export default function App() {
  const [items, setItems] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const select = (id) => {
    setSelectedId(id);
  }
  
  useEffect(() => {
    setItems(DATA);
  }, []);
  

  const executeSearch = (search) => {
    const searchArray = DATA.filter((item) => item.lastname.startsWith(search) )
    setItems(searchArray);
  }

  /* function renderItem({item}) {
    return (<Text>{item.lastname}</Text>);
  } */

 /*  const renderItem = ({item}) => (
    <Text>{item.lastname}</Text>
  );
 */
  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch}/>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        renderItem={({item}) => (
          <Row person={item} selectedId={selectedId} select={select}></Row>
        )}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
    width: '90%',
    height: '100%',
  },
  row: {
    marginBottom: 5,
    marginTop: 5,
  },
});
