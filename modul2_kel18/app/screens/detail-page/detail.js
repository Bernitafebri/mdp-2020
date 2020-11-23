import React from 'react';
import {View, SafeAreaView, ScrollView, Text} from 'react-native';

import Styles from './detail.styles';

export default function Detail({route}) {
  const anggota = [
    {
      id: 1,
      nama: 'Bernita Febrihatin',
    },
    {
      id: 2,
      nama: 'Kholid Syaifullah', 
    },
    {
      id: 3,
      nama: 'Pradana Ega Putra',
    },
    {
      id: 4,
      nama: 'Indira Ananda Putra Utama',
    },
  ];

 const { key } = route.params;
 const { gambar } = route.params;
 const { mail } = route.params;
 const { nama } = route.params;

  return ( 
    <SafeAreaView style={Styles.container}>
      <ScrollView style={Styles.scrollView}>
        <View style={Styles.view}>
          <View style={Styles.titleContainer}>
            <Text style={Styles.title}>KELOMPOK 18</Text>
            <Text>itemId: {JSON.stringify(key)}</Text>
            {/* <Image source={{uri: gambar}} style={Styles.image}></Image>  
            Avatar sedang error*/}
            <Text style={Styles.text1}>
              {nama}
              </Text>
            <Text >
              {mail}
              </Text>
          </View>
          <View style={Styles.view2}>
            <View style={{marginBottom: 10}}>
              <Text style={Styles.text}>Anggota Kelompok</Text>
            </View>
            {anggota.map(item => (
              <View key={item.id} style={Styles.list}>
                <Text style={Styles.text}>{item.nama}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
