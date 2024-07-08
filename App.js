import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import PilihHari from './components/PilihHari';
import ListMenu from './components/List';

const jadwalAwal = {
  Senin: ['Nasi Goreng', 'Kerupuk', 'Telur Dadar'],
  Selasa: ['Ikan Asin', 'Nasi Liwet', ['Sambal']],
  Rabu: ['Ayam Goreng Balado', 'Tumis Kangkung'],
  Kamis: ['Udang Mentega', 'Cumi Cabe Ijo'],
  Jumat: ['Soto Ayam', 'Kerupuk'],
  Sabtu: ['Gado-gado', 'Emping'],
  Minggu: ['Ikan Lele', 'Sambal Terasi', 'Lalapan'], 
};

const App = () => {
  const [jadwal, setJadwal] = useState(jadwalAwal);
  const [hariTerpilih, setHariTerpilih] = useState('Senin');

  useEffect(() => {
    console.log(`Hari yang dipilih: ${hariTerpilih}`);
  }, [hariTerpilih]);

  const jadwalMemoized = useMemo(() => {
    return jadwal[hariTerpilih] || [];
  }, [jadwal, hariTerpilih]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#4CAF50" barStyle="light-content" />
      <Image
          source={require('./assets/Ikon.png')}
          style={styles.image}
        />
      <Text style={styles.title}>
         {' '}Jadwal Makanan Mingguan
      </Text>

      <PilihHari
        hariTerpilih={hariTerpilih}
        onChange={setHariTerpilih}
        hari={Object.keys(jadwal)}
      />
      <ListMenu makanan={jadwalMemoized} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFE4E1', 
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },

  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    alignSelf: 'center', 
  },

});

export default App;