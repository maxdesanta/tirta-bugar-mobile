import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import dropDownMenuStyle from './style';

const data = [
{ label: '8x Pertemuan', value: '1' },
{ label: '1 Bulan', value: '2' },
{ label: '3 Bulan', value: '3' },
];

export default function DropdownMenu({ value, setValue }) {
    const [isFocus, setIsFocus] = useState(false);
  
    const handleVal = (item) => {
      setValue(item.value);
      setIsFocus(false);
    }

    return (
      <View>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={data}
          maxHeight={250}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Pilih' : '...'}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={handleVal}
        />
      </View>
    );
};

const styles = StyleSheet.create(dropDownMenuStyle);