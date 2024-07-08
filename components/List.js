import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListMenu = ({ makanan }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Makanan Hari Ini:</Text>
      {makanan.map((item, index) => (
        <Text key={index} style={styles.item}>
          {item}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#FFE4E1',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  item: {
    fontSize: 16,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    textAlign: 'center',
    backgroundColor: '#FDF5E6',
  },
});

export default ListMenu;
