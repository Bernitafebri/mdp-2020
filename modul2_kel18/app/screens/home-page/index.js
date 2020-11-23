import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  ToastAndroid,
  Text,
} from 'react-native';

import Styles from './index.styles';
import * as Api from '../../services/api';

export default function Index({navigation}) {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    Api.getUserData()
      .then(res => setUserData(res))
      .catch(err => alert(err.message));
  }, []);

  const onPressCardView = (item) => {
    ToastAndroid.showWithGravity(
      item.first_name,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
    navigation.navigate('Detail Page',{
      key: item.id,
      nama : item.first_name + " " + item.last_name,
      gambar: item.avatar,
      mail: item.email}); 
  };

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView>
        <View style={Styles.titleContainer}>
          <Text style={Styles.title}>KELOMPOK 18</Text>
        </View>
        <View style={Styles.scrollView}>
          {userData.map(item => ( 
            <TouchableOpacity
              key={item.id}
              style={Styles.cardView}
              onPress={() => onPressCardView(item)}>
              <View style={Styles.cardView1}>
                <Image source={{uri: item.avatar}} style={Styles.image} />
              </View>
              <View style={Styles.cardView2}>
                <Text style={Styles.text1}>{`${item.first_name}`}</Text>
                <Text style={Styles.text2}>{`${item.last_name}`}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 
