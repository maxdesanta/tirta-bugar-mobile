import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getMeetMemberIdAction, editMeetAction, getMeetAction, resetMeetAction } from '../../redux/actions/MeetAction';
import { detailMemberAction } from '../../redux/actions/MemberAction';


import InputForm from '../../components/InputForm';
import { customFont } from '../../Helper/customFont';

// import stylea
import editMeetStyle from './style';

export default function EditMeetScreen({navigation, route}) {
    const id = route.params.idPertemuan;
    const font = customFont();
    const dispatch = useDispatch();
    const { isDetailMeet, isResetMeet } = useSelector(state => state.meet);
    const [pilihDateX1, setPilihDateX1] = useState(null);
    const [pilihDateX2, setPilihDateX2] = useState(null);
    const [pilihDateX3, setPilihDateX3] = useState(null);
    const [pilihDateX4, setPilihDateX4] = useState(null);
    const [pilihDateX5, setPilihDateX5] = useState(null);
    const [pilihDateX6, setPilihDateX6] = useState(null);
    const [pilihDateX7, setPilihDateX7] = useState(null);
    const [pilihDateX8, setPilihDateX8] = useState(null);
    const [x1, setx1] = useState(null);
    const [x2, setx2] = useState(null);
    const [x3, setx3] = useState(null);
    const [x4, setx4] = useState(null);
    const [x5, setx5] = useState(null);
    const [x6, setx6] = useState(null);
    const [x7, setx7] = useState(null);
    const [x8, setx8] = useState(null);
    const [oldX1, setOldX1] = useState(null);
    const [oldX2, setOldX2] = useState(null);
    const [oldX3, setOldX3] = useState(null);
    const [oldX4, setOldX4] = useState(null);
    const [oldX5, setOldX5] = useState(null);
    const [oldX6, setOldX6] = useState(null);
    const [oldX7, setOldX7] = useState(null);
    const [oldX8, setOldX8] = useState(null);

    if(!font) {
        null;
    };

    const meetHandle = async () => {
        try {
            await dispatch(editMeetAction({ x1, x2, x3, x4, x5, x6, x7, x8, id }));
            dispatch(getMeetAction());
            dispatch(detailMemberAction({ id }));
            navigation.navigate("Detail", { memberId: id });
        } catch (err) {
            console.log(err.message);
        }
    };

    const resetHandle = () => {
        dispatch(resetMeetAction({ id }));
        dispatch(getMeetAction());
        dispatch(detailMemberAction({ id }));
        setOldX1(null);
        setOldX2(null);
        setOldX3(null);
        setOldX4(null);
        setOldX5(null);
        setOldX6(null);
        setOldX7(null);
        setOldX8(null);
        navigation.navigate("Detail", { memberId: id });
    };

    useEffect(() => {
        dispatch(getMeetMemberIdAction({ id }));   
    }, [id, dispatch])

    useEffect(() => {
        if (isResetMeet) {
            dispatch(getMeetAction());
            dispatch(getMeetMemberIdAction({ id }));
        }
    }, [dispatch, isResetMeet]);

    useEffect(() => {
        if (isDetailMeet) {
            setOldX1(isDetailMeet[0].x1);
            setOldX2(isDetailMeet[0].x2);
            setOldX3(isDetailMeet[0].x3);
            setOldX4(isDetailMeet[0].x4);
            setOldX5(isDetailMeet[0].x5);
            setOldX6(isDetailMeet[0].x6);
            setOldX7(isDetailMeet[0].x7);
            setOldX8(isDetailMeet[0].x8);
        }
    }, [isDetailMeet]);

    return (
        <View style={styles.container}>
            <Text style={styles.HeadingText}>Edit Pertemuan</Text>
            <View style={styles.containerForm}>
                <InputForm label="Pertemuan 1" valueDate={x1} setValueDate={setx1} chooseDate={pilihDateX1} setChooseDate={setPilihDateX1} valueDetail={oldX1} />
                <InputForm label="Pertemuan 2" valueDate={x2} setValueDate={setx2} chooseDate={pilihDateX2} setChooseDate={setPilihDateX2} valueDetail={oldX2} />
            </View>
            <View style={styles.containerForm}>
                <InputForm label="Pertemuan 3" valueDate={x3} setValueDate={setx3} chooseDate={pilihDateX3} setChooseDate={setPilihDateX3} valueDetail={oldX3} />
                <InputForm label="Pertemuan 4" valueDate={x4} setValueDate={setx4} chooseDate={pilihDateX4} setChooseDate={setPilihDateX4} valueDetail={oldX4} />
            </View>
            <View style={styles.containerForm}>
                <InputForm label="Pertemuan 5" valueDate={x5} setValueDate={setx5} chooseDate={pilihDateX5} setChooseDate={setPilihDateX5} valueDetail={oldX5}/>
                <InputForm label="Pertemuan 6" valueDate={x6} setValueDate={setx6} chooseDate={pilihDateX6} setChooseDate={setPilihDateX6} valueDetail={oldX6} />
            </View>
            <View style={styles.containerForm}>
                <InputForm label="Pertemuan 7" valueDate={x7} setValueDate={setx7} chooseDate={pilihDateX7} setChooseDate={setPilihDateX7} valueDetail={oldX7} />
                <InputForm label="Pertemuan 8" valueDate={x8} setValueDate={setx8} chooseDate={pilihDateX8} setChooseDate={setPilihDateX8} valueDetail={oldX8} />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', gap: 10}}>
                <TouchableOpacity style={styles.buttonEditForm} onPress={meetHandle}>
                    <Text style={styles.textButton}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonCancelForm} onPress={resetHandle}>
                    <Text style={styles.textButton}>Reset</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(editMeetStyle);