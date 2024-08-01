import { View, Text, StyleSheet, TextInput } from "react-native";
import { useFonts } from "expo-font";
import inputFormStyle from "./style";
import DatePicker from "../DatePicker";
import DropdownMenu from "../DropdownMenu";

export default function InputForm({label, valueInput, onChange, valueDate, setValueDate, valueDrop, setValueDrop, chooseDate, setChooseDate, valueDetail }) {
    const [fontsLoaded] = useFonts({
        'roboto-r': require('../../assets/fonts/Roboto-Regular.otf'),
        'roboto-m': require('../../assets/fonts/Roboto-Medium.otf'),
        'roboto-bl': require('../../assets/fonts/Roboto-Black.otf'),
        'roboto-b': require('../../assets/fonts/Roboto-Bold.otf'),
    });

  return (
    <View style={styles.container}>
      <Text style={styles.labelForm}>{label}</Text>
      {label === "Masa Berlaku" ? (
        <DatePicker dateData={valueDate} setDateData={setValueDate} selectDate={chooseDate} setSelectDate={setChooseDate} valueNow={valueDetail} />
      ) : label === "Durasi" ? (
        <DropdownMenu value={valueDrop} setValue={setValueDrop} />
      ) : (
        <TextInput style={styles.inputForm} value={valueInput} onChangeText={onChange} />  
      )}
    </View>
  )
}

const styles = StyleSheet.create(inputFormStyle);