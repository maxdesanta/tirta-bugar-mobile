import { useEffect, useState } from "react";
import { ScrollView, SafeAreaView, View, StyleSheet, Text } from "react-native";
import { deleteMemberAction, getMemberAction, searchMemberAction } from "../../redux/actions/MemberAction";
import { deleteMeetAction, getMeetAction } from "../../redux/actions/MeetAction";
import { useSelector, useDispatch } from "react-redux";

// import component
import SearchPage from "../../components/Search";
import CardMember from "../../components/CardMember";

// import style
import homeStyle from "./style";

export default function HomeScreen({ navigation }) {
  const [searchM, setSearchM] = useState("");
  const dispatch = useDispatch();
  const { isGetMember, isDeleteMember, isSearchMember } = useSelector(state => state.member);
  const { isGetMeet, isDeleteMeet } = useSelector(state => state.meet);
  
  // delete member
  const deleteMemberClick = async (id) => {
    try {
      const match = isGetMeet.find(data => data.id_member === id);

      const action = [dispatch(deleteMemberAction({ id }))];

      if (match) {
        action.push(dispatch(deleteMeetAction({ id })));
      } 

      await Promise.all(action);

      dispatch(getMemberAction());

      if (match) {
        dispatch(getMeetAction());
      }

    } catch (err) {
      console.error(err.message);
    }
  
  }

  useEffect(() => {
    dispatch(getMemberAction());
  }, [dispatch])

  useEffect(() => {
    if(searchM) {
      dispatch(searchMemberAction(searchM));
    }
  }, [dispatch, searchM])
  
  useEffect(() => {
    if (isDeleteMember) {
      dispatch(getMemberAction());
    }
  }, [dispatch, isDeleteMember, isDeleteMeet])
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} >
        <View style={styles.searchGrup}>
          <SearchPage valueSearch={searchM} valueOnChangeSearch={text => setSearchM(text)} />
        </View>
        {searchM === '' ? (
          <View style={styles.spacing}>
            {isGetMember ? isGetMember.map(data => (
              <CardMember kode={data.kode_member} nama={data.nama} paket={data.nama_paket} durasi={data.durasi} masaBerlaku={data.masa_berlaku} nomorTelp={data.nomor_telepon} eventDetail={() => navigation.navigate('Detail', {memberId: data.id})} eventDel={() => deleteMemberClick(data.id)} keterangan={data.keterangan} kwitansi={data.no_kwitansi} />  
            )) : (
              <Text>Loading...</Text>
            )} 
          </View>
        ) : (
          <View style={styles.spacing}>
              {isSearchMember.map(data => (  
              <CardMember kode={data.kode_member} nama={data.nama} paket={data.nama_paket} durasi={data.durasi} masaBerlaku={data.masa_berlaku} nomorTelp={data.nomor_telepon} eventDetail={() => navigation.navigate('Detail', {memberId: data.id})} eventDel={() => deleteMemberClick(data.id)} keterangan={data.keterangan} kwitansi={data.no_kwitansi} />  
            ))} 
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create(homeStyle);