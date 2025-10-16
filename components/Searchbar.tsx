import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Platform, StyleSheet, TextInput, View } from 'react-native';

const SearchBar = () => {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <Feather name="search" size={20} color="#555" style={styles.icon} />
      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Search..."
        placeholderTextColor="#888"
        style={styles.input}
        underlineColorAndroid="transparent" // removes Android underline
        autoCorrect={false}
        autoCapitalize="none"
      />

      {search.trim() == '' ? (
        <Feather name="camera" size={20} color="#555" />
      ) : (
        <Feather name="x" size={20} color="#555" onPress={() => setSearch('')}/>
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === 'ios' ? 11 : 5,
    margin: 10,
    borderWidth: 1,
    borderColor: '#333',
    // Remove focus ring on web
    ...Platform.select({
      web: {
        outlineStyle: 'none' as any,
      },
    }),
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 20,
    padding: 0,
    color: '#333',

    // Prevent blue outline on web
    ...Platform.select({
      web: {
        outlineStyle: 'none' as any,
      },
    }),
  },
});
