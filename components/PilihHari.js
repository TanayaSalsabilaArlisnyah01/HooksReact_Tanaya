import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const PilihHari = ({ hariTerpilih, onChange, hari }) => {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={hariTerpilih}
        onValueChange={(itemValue) => onChange(itemValue)}
        style={styles.picker}
      >
        {hari.map((item) => (
          <Picker.Item key={item} label={item} value={item} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    marginBottom: 20,
    backgroundColor: '#FDF5E6',
  },

  picker: {
    height: 50,
    width: '100%',
  },
});

export default PilihHari;
