import React from 'react';
import { View, LayoutAnimation, Platform, UIManager, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import SectionHeader from '../components/SectionHeader/SectionHeader';
import Paper from './Paper';

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ExpandablePaper = ({ title, children }) => {
    const [expanded, setExpanded] = React.useState(false);
    const effects = () => {
        setExpanded(!expanded);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    }

    return (
        <Paper>
            <View style={styles.header}>

                <SectionHeader text={title} />

                <View>
                    <TouchableOpacity onPress={() => effects()}>
                        <MaterialIcons name={expanded ? "expand-less" : "expand-more"} size={24} color="#646464" />
                    </TouchableOpacity>
                </View>

            </View>

            {
                expanded &&
                <View style={styles.content}>
                    {children}
                </View>
            }
        </Paper>
    )
}


export default ExpandablePaper;

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'transparent',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    content: { marginVertical: 10 }

})