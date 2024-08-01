import { useEffect, useState } from "react";
import { ScrollView, SafeAreaView, View, StyleSheet } from "react-native";
import { deleteMemberAction, getMemberAction, searchMemberAction } from "../../redux/actions/MemberAction";
import { useSelector, useDispatch } from "react-redux";
import SearchPage from "../../components/Search";
import CardMember from "../../components/CardMember";
import homeStyle from "./style";

export default function HomeScreen({ navigation }) {
  const [searchM, setSearchM] = useState("");
  const dispatch = useDispatch();
  const { isGetMember, isDeleteMember, isSearchMember } = useSelector(state => state.member);
  
  // delete member
  const deleteMemberClick = (id) => {
    dispatch(deleteMemberAction({ id }));
  }

  useEffect(() => {
    dispatch(getMemberAction());
  }, [dispatch])

  useEffect(() => {
    if (isDeleteMember) {
      dispatch(getMemberAction());
    }
  }, [dispatch, isDeleteMember])

  useEffect(() => {
    if(searchM) {
      dispatch(searchMemberAction(searchM));
    }
  },[dispatch,searchM])
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} >
        <View style={styles.searchGrup}>
          <SearchPage valueSearch={searchM} valueOnChangeSearch={text => setSearchM(text)} />
        </View>
        {searchM === '' ? (
          <View style={styles.spacing}>
            {isGetMember.map(data => (
              <CardMember kode={data.kode_member} nama={data.nama} paket={data.nama_paket} durasi={data.durasi} masaBerlaku={data.masa_berlaku} nomorTelp={data.nomor_telepon} eventEdit={() => navigation.navigate('Edit', {memberId: data.id})} eventDel={() => deleteMemberClick(data.id)} />  
            ))} 
          </View>
        ) : (
          <View style={styles.spacing}>
            {isSearchMember.map(data => (
              <CardMember kode={data.kode_member} nama={data.nama} paket={data.nama_paket} durasi={data.durasi} masaBerlaku={data.masa_berlaku} nomorTelp={data.nomor_telepon} eventEdit={() => navigation.navigate('Edit', {memberId: data.id})} eventDel={() => deleteMemberClick(data.id)} />  
            ))} 
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create(homeStyle);