import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { detailMemberAction, editMemberAction, getMemberAction } from "../../redux/actions/MemberAction";
import editStyle from "./style";

// component
import InputForm from "../../components/InputForm";
import { customFont } from "../../Helper/customFont";

// helper
import { checkMonth } from "../../Helper/cheackMonth";

export default function EditScreen({navigation, route}) {
    const dispatch = useDispatch();
    const font = customFont();
    const id = route.params.memberId;
  
    // set usestate form
    const [name, setName] = useState("");
    const [codeMember, setCodeMember] = useState("");
    const [namePacket, setNamePacket] = useState("");
    const [duration, setDuration] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [expired, setExpired] = useState(new Date());
    const [pilihDate, setPilihDate] = useState(null);
    const [detailMember, setDetailMember] = useState(null);
    const { isEditMember, isDetailMember } = useSelector(state => state.member);
  
    if (!font) {
      null;
    }
  
    // member handle
    const memberHandle = async() => {
      try {
        await dispatch(editMemberAction({ name, codeMember, phoneNumber, expired, duration, namePacket, id }));
        dispatch(getMemberAction())
        navigation.navigate("Dashboard");
      } catch (err) {
        console.log(err.message);
      }
    }

    useEffect(() => {
        dispatch(detailMemberAction({ id }));
    }, [dispatch, id])

    useEffect(() => {
      if (isDetailMember) {
        setName(isDetailMember.nama);
        setCodeMember(isDetailMember.kode_member);
        setNamePacket(isDetailMember.nama_paket);
        setDuration(checkMonth(isDetailMember.durasi));
        setPhoneNumber(isDetailMember.nomor_telepon);
        setDetailMember(isDetailMember.masa_berlaku);
      }
    }, [isDetailMember]);
    
    return (
      <View style={styles.container}>
          <Text style={styles.addHeadingText}>Edit Member</Text>
          <View style={styles.containerForm}>
            <InputForm label="nama" valueInput={name} onChange={text => setName(text)} />
            <InputForm label="Kode Member" valueInput={codeMember} onChange={text => setCodeMember(text)} />
          </View>
          <View style={styles.containerForm}>
            <InputForm label="Paket" valueInput={namePacket} onChange={text => setNamePacket(text)} />
            <InputForm label="Durasi" valueDrop={duration} setValueDrop={setDuration} />
          </View>
          <View style={styles.containerForm}>
            <InputForm label="No Telepon" valueInput={phoneNumber} onChange={text => setPhoneNumber(text)} />
            <InputForm label="Masa Berlaku" valueDate={expired} setValueDate={setExpired} chooseDate={pilihDate} setChooseDate={setPilihDate} valueDetail={detailMember} />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', gap: 10}}>
                <TouchableOpacity style={styles.buttonEditForm} onPress={memberHandle}>
                    <Text style={styles.textButton}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonCancelForm} onPress={() => navigation.navigate("Dashboard")}>
                    <Text style={styles.textButton}>Cancel</Text>
                </TouchableOpacity>
            </View>
      </View>
    )
}

const styles = StyleSheet.create(editStyle);