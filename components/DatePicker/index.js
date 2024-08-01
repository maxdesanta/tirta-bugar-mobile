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
    const dateNow = selectedDate; 
    setDateData(dateNow);
    setSelectDate(dateNow);  
    hideDatePicker();
  };

  useEffect(() => {
    if (valueNow) {
      setDateData(new Date(valueNow));
      setSelectDate(new Date(valueNow));  
    }
  }, [valueNow])

  return (
    <View style={styles.dateForm}>
        <TouchableOpacity onPress={() => showDatePicker()}>
            <Text style={styles.text}>
                {selectDate ? converDate(dateData.toDateString()) : "Select Date"}
            </Text>
        </TouchableOpacity>
        <CalenderIcon />  
        {pickerSelect && (
          <DateTimePicker value={dateData} mode="date" onChange={handleDateConfirm} />
        )}
    </View>
  );
}

const styles = StyleSheet.create(datePickerStyle);
