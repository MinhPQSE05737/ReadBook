import React, { useRef } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, PointPropType, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import image1 from './image/louisedelvallier00dumauoft-001.jpg';
import image5 from './image/louisedelvallier00dumauoft-005.jpg';
import image9 from './image/louisedelvallier00dumauoft-009.jpg';
import image14 from './image/louisedelvallier00dumauoft-014.jpg';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    image: image1,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    image: image14,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    image: image9,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    image: image5,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    image: image5,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    image: image5,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    image: image5,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    image: image5,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    image: image5,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    image: image5,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    image: image5,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    image: image5,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    image: image5,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    image: image5,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    image: image5,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    image: image5,
  },
];

const App = () => {
  const maxIndex = DATA.length - 1;
  console.log({maxIndex});
  const refContainer = useRef(null); 

  const previousImage = (index) => {
    if(index === 0){
      return;
    }
    else {
      refContainer.current.scrollToIndex({ animated: true, index: index-1 });
    }
  }

  const nextImage = (index) => {
    if(index === maxIndex){
      return;
    }
    else {
      refContainer.current.scrollToIndex({ animated: true, index: index+1 });
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={refContainer}
        data={DATA}
        renderItem={({ item, index }) => {
            // console.log('index', index);
            return (
              <ImageBackground source={item.image} style={styles.image} resizeMode='cover'>
                <TouchableOpacity onPress={() => previousImage(index)} style={{backgroundColor: 'red', width: 50}}>
                <Text style={{ fontSize: 20, textAlign: 'left' }}>Pre</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => nextImage(index)} style={{backgroundColor: 'red', width: 50, alignSelf: 'flex-end'}}>
                  <Text style={{ fontSize: 20, textAlign: 'right' }}>Next</Text>
                </TouchableOpacity>
              </ImageBackground>
            )
        }} 
        keyExtractor={(item, index) => index.toString()}
        horizontal
        scrollEnabled={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  item: {
    flex: 1,
  },
  title: {
    fontSize: 32,
  },
  image: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },
});

export default App;