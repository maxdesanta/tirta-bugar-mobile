import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addMemberAction, getMemberAction } from "../../redux/actions/MemberAction";
import addStyle from "./style";

// component
import InputForm from "../../components/InputForm";
import { customFont } from "../../Helper/customFont";

export default function AddScreen({ navigation }) {
  const dispatch = useDispatch();
  const font = customFont();

  // set usestate form
  const [name, setName] = useState("");
  const [codeMember, setCodeMember] = useState("");
  const [duration, setDuration] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [noKwitansi, setNoKwitansi] = useState("");
  const [expired, setExpired] = useState(new Date());
  const [pilihDate, setPilihDate] = useState(null);
  const { isAddMember } = useSelector(state => state.member);

  if (!font) {
    null;
  }

  // member handle
  const memberHandle = async() => {
    try {
      await dispatch(addMemberAction({ name, codeMember, phoneNumber, expired, duration, noKwitansi }));
      dispatch(getMemberAction());
      setName("");
      setCodeMember("");
      setDuration(null);
      setPhoneNumber("");
      setNoKwitansi("");
      setExpired(new Date());
      navigation.navigate("Dashboard");
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    if (isAddMember) {
      dispatch(getMemberAction());
    }
  },[isAddMember, dispatch])
  
  return (
    <View style={styles.container}>
        <Text style={styles.addHeadingText}>Tambah Member</Text>
        <View style={styles.containerForm}>
          <InputForm label="nama" valueInput={name} onChange={text => setName(text)} />
          <InputForm label="Kode Member" valueInput={codeMember} onChange={text => setCodeMember(text)} />
        </View>
        <View style={styles.containerForm}>
          <InputForm label="Durasi" valueDrop={duration} setValueDrop={setDuration} />
          <InputForm label="No Telepon" valueInput={phoneNumber} onChange={text => setPhoneNumber(text)} />
        </View>
        <View style={styles.containerForm}>
          <InputForm label="Masa Berlaku" valueDate={expired} setValueDate={setExpired} chooseDate={pilihDate} setChooseDate={setPilihDate} />
          <InputForm label="No Kwitansi" valueInput={noKwitansi} onChange={text => setNoKwitansi(text)} />
        </View>
        <TouchableOpacity style={styles.buttonForm} onPress={memberHandle}>
          <Text style={styles.textButton}>Tambah</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create(addStyle);