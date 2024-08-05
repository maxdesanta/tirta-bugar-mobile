import { View, Text, StyleSheet, Pressable } from "react-native";
import { converDate } from "../../Helper/converDate";
import { customFont } from "../../Helper/customFont";
import cardMemberStyle from "./style";

export default function CardMember({ kode, nama, paket, durasi, masaBerlaku, nomorTelp, eventDetail, eventDel, keterangan, kwitansi}) {
    const font = customFont();

    if (!font) {
        null;
    }

  return (
    <View style={styles.container}>
        <View style={styles.headingCardTitleBg}>
              <Text style={styles.headingCard}>{kode}</Text>
        </View>      
        <View style={styles.container2}>
            <View style={styles.containerSpace}>
                <Text style={styles.boldFont}>Nama</Text>
                <Text style={styles.boldFont}>Nomor Telepon</Text>
                <Text style={styles.boldFont}>Paket</Text>
                <Text style={styles.boldFont}>Durasi</Text>
                <Text style={styles.boldFont}>Masa Berlaku</Text>
                <Text style={styles.boldFont}>Keterangan</Text>
                <Text style={styles.boldFont}>No Kwitansi</Text>  
            </View>
            <View style={styles.containerSpace}>
                <Text style={styles.endText}>{nama}</Text>
                <Text style={styles.endText}>{nomorTelp === null || nomorTelp === ""  ? "None" : nomorTelp}</Text>
                <Text style={styles.endText}>{paket}</Text>
                <Text style={styles.endText}>{durasi}</Text>
                <Text style={styles.endText}>{converDate(masaBerlaku)}</Text>
                <Text style={styles.endText}>{keterangan}</Text>
                <Text style={styles.endText}>{kwitansi}</Text>
            </View>  
        </View>
        <View style={styles.container3}>
            <Pressable style={styles.buttonEdit} onPress={eventDetail}>
                <Text style={styles.btnText}>Detail</Text>
            </Pressable>
            <Pressable style={styles.buttonDelete} onPress={eventDel}>
                <Text style={styles.btnText}>Delete</Text>
            </Pressable>      
        </View>  
    </View>
  )
}

const styles = StyleSheet.create(cardMemberStyle);