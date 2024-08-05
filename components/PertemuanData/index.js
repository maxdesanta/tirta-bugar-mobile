import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { customFont } from '../../Helper/customFont';
import { converDate } from '../../Helper/converDate';
import pertemuanStyle from './style';

export default function PertemuanData({label, value}) {
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
            <Text>{value === null ? "-" : converDate(value)}</Text>
        </View>
    )
}

const styles = StyleSheet.create(pertemuanStyle);