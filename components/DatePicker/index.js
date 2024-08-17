import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import datePickerStyle from './style';
import DateTimePicker from '@react-native-community/datetimepicker';
import CalenderIcon from '../../assets/icon/CalenderIcon';

// import helper
import {converDate} from '../../Helper/converDate';

export default function DatePicker({ dateData, setDateData, selectDate, setSelectDate, valueNow}) {
  const [pickerSelect, setPickerSelect] = useState(false);

  const showDatePicker = () => {
    setPickerSelect(true);
  };

  const hideDatePicker = () => {
    setPickerSelect(false);
  };

  const handleDateConfirm = (e, selectedDate) => {
    if (selectedDate) {
      setDateData(selectedDate);
      setSelectDate(selectedDate);  
    }
    hideDatePicker();
  };

  useEffect(() => {
    if (valueNow) {
      setDateData(new Date(valueNow));
      setSelectDate(new Date(valueNow));  
    } else {
      setDateData(null);
      setSelectDate(null);
    }
  }, [valueNow, setDateData, setSelectDate]);

  return (
    <View style={styles.dateForm}>
        <TouchableOpacity onPress={() => showDatePicker()}>
            <Text style={styles.text}>
                {selectDate ? converDate(dateData) : "Select Date"}
            </Text>
        </TouchableOpacity>
        <CalenderIcon />  
        {pickerSelect && (
        <DateTimePicker
          value={dateData || new Date()}
          mode="date"
          display="default"
          onChange={handleDateConfirm}
        />
        )}
    </View>
  );
}

const styles = StyleSheet.create(datePickerStyle);
