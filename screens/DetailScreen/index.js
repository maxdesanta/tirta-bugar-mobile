// import package
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { detailMemberAction } from "../../redux/actions/MemberAction";
import { customFont } from "../../Helper/customFont";

// import style
import detailStyle from './style';
import { converDate } from "../../Helper/converDate";
// import component
import BioData from '../../components/BioData';
import PertemuanData from '../../components/PertemuanData';

export default function DetailScreen({navigation, route}) {
    const id = route.params.memberId;
    const font = customFont();
    const dispacth = useDispatch();
    const [idMember, setIdMember] = useState("");
    const [name, setName] = useState("");
    const [codeMember, setCodeMember] = useState("");
    const [namePacket, setNamePacket] = useState("");
    const [duration, setDuration] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [expired, setExpired] = useState(new Date());
    const [status, setStatus] = useState("");
    const [kwitansi, setKwitansi] = useState("");
    const [p1, setP1] = useState("");
    const [p2, setP2] = useState("");
    const [p3, setP3] = useState("");
    const [p4, setP4] = useState("");
    const [p5, setP5] = useState("");
    const [p6, setP6] = useState("");
    const [p7, setP7] = useState("");
    const [p8, setP8] = useState("");
    const { isDetailMember } = useSelector(state => state.member);

    if (!font) {
        null;
    }

    const memberEdit = () => {
        navigation.navigate("Edit");
    }

    useEffect(() => {
        dispacth(detailMemberAction({ id }));
    }, [dispacth, id]);

    useEffect(() => {
        if (isDetailMember) {
            setIdMember(isDetailMember.id);
            setName(isDetailMember.nama);
            setCodeMember(isDetailMember.kode_member);
            setNamePacket(isDetailMember.nama_paket);
            setDuration(isDetailMember.durasi);
            setPhoneNumber(isDetailMember.nomor_telepon);
            setExpired(isDetailMember.masa_berlaku);
            setStatus(isDetailMember.keterangan);
            setKwitansi(isDetailMember.no_kwitansi);
            setP1(isDetailMember.x1);
            setP2(isDetailMember.x2);
            setP3(isDetailMember.x3);
            setP4(isDetailMember.x4);
            setP5(isDetailMember.x5);
            setP6(isDetailMember.x6);
            setP7(isDetailMember.x7);
            setP8(isDetailMember.x8);
        }
    }, [isDetailMember])
    return (
        <View style={styles.container}>
            <Text style={styles.headingDetail}>Detail Member</Text>
            <View style={styles.containerBio}>
                <BioData label="Nama" value={name} />
                <BioData label="Kode Member" value={codeMember} />
                <BioData label="Nomor Telepon" value={phoneNumber} />
                <BioData label="Jenis Paket" value={namePacket} />
                <BioData label="Durasi" value={duration} />
                <BioData label="Masa Berlaku" value={expired} />
                <BioData label="Status" value={status} />
                <BioData label="No Kwitansi" value={kwitansi} />
            </View>
            {status === "8x Pertemuan" ? (
                <View style={styles.containerMeet}>
                    <Text style={styles.headingMeet}>Pertemuan</Text>
                    <PertemuanData label="x1" value={p1} />
                    <PertemuanData label="x2" value={p2} />
                    <PertemuanData label="x3" value={p3} />
                    <PertemuanData label="x4" value={p4} />
                    <PertemuanData label="x5" value={p5} />
                    <PertemuanData label="x6" value={p6} />
                    <PertemuanData label="x7" value={p7} />
                    <PertemuanData label="x8" value={p8} />
                </View>
            ) : null}
            {status === "8x Pertemuan" ? (
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.editMemberBtn} onPress={memberEdit}>
                        <Text style={styles.textButton}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.editMeetBtn}>
                        <Text style={styles.textButton}>Edit Pertemuan</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.editMemberBtn} onPress={memberEdit}>
                        <Text style={styles.textButton}>Edit</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create(detailStyle);