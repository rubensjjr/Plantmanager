import React from 'react';
import { SafeAreaView, StyleSheet, View, Text} from 'react-native';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation() {


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    😀
                    </Text>
                <Text style={styles.title}>Prontinho</Text>
                <Text style={styles.subtitle}>
                    Vamos começar a cuidar das 
                        suas {'\n'} plantinhas com cuidado
                    </Text>
                <View style={styles.footer}>
                    <Button title="Começar" />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
                alignItems: 'center',
        justifyContent: 'space-around',
    },
    content: {
        flex: 1,
        width: '100%',
        justifyContent:'center',
        alignItems: 'center',
        padding:30
    },
    emoji: {
        fontSize: 78
    },

    title: {
        fontSize: 22,
        color: colors.heading,
        fontFamily: fonts.heading,
        textAlign: 'center',
        lineHeight: 38,
        marginTop: 15
    },

    subtitle: {
        fontSize: 17,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.text,
        paddingVertical:10
    },
    footer: {
        marginTop: 20,
        width: '100%',
        paddingHorizontal: 50,

    }
})