import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import packetStyle from "./style";
import { getPacketAction } from "../../redux/actions/PacketAction";
import { useSelector, useDispatch } from "react-redux";

export default function PacketScreen() {
  // insiasi redux
  const dispatch = useDispatch();
  const { isGetPacket } = useSelector(state => state.packet);

  useEffect(() => {
    dispatch(getPacketAction());
  }, [dispatch])
  
  return (
    <View style={styles.container}>
      {/* table */}
      <View>
        {/* table head */}
        <View style={styles.tableHead}>
          <View style={{width: '10%'}}>
            <Text style={styles.textHead}>No</Text>
          </View>
          <View style={{width: '30%'}}>
            <Text style={styles.textHead}>Daftar Paket</Text>
          </View>
          <View style={{width: '25%'}}>
            <Text style={styles.textHead}>Durasi</Text>
          </View>
          <View tyle={{width: '20%'}}>
            <Text style={styles.textHead}>Harga</Text>
          </View>
        </View>

        {/* table body */}
        {isGetPacket.map((data, index) => (
            <View style={styles.tableBody}>
              <View style={{width: '10%'}}>
                <Text>{index + 1}</Text>
              </View>
              <View style={{width: '30%'}}>
                  <Text>{data.nama_paket}</Text>
              </View>
              <View style={{width: '25%'}}>
                <Text>{data.durasi}</Text>
              </View>
              <View style={{width: '20%'}}>
                <Text>{data.harga}</Text>
              </View>
          </View>
        ))} 
      </View>
    </View>
  )
}

const styles = StyleSheet.create(packetStyle);