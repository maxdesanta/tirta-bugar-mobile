import { View, Text, StyleSheet } from 'react-native';
import { customFont } from '../../Helper/customFont';
import { converDate } from '../../Helper/converDate';
import bioStyle from './style';

export default function BioData({ label, value }) {
    const font = customFont();

    if (!font) {
        null;
    }

    return (
        <View style={styles.groupBio}>
            <View style={styles.groupLabelBio}>
                <Text style={styles.labelBold}>{label}</Text>
                <Text>:</Text>
            </View>
            <Text>{label === "Masa Berlaku" ? converDate(value) : value}</Text>
        </View>
    )
}

const styles = StyleSheet.create(bioStyle);