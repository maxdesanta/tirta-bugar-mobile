import { StyleSheet, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import searchStyle from './style';

export default function SearchPage({valueSearch, valueOnChangeSearch, searchProduct}) {
  return (
    <View style={styles.container}>
      <Ionicons name="search-sharp" size={24} style={styles.icon}  />
      <TextInput placeholder='search...' style={styles.textInput} value={valueSearch} onChangeText={valueOnChangeSearch} onKeyPress={({ nativeEvent }) => {
        const { key } = nativeEvent;
        if (key === 'Enter') {
          searchProduct(valueSearch);
        }
      }} />     
    </View>
  )
}

const styles = StyleSheet.create(searchStyle);