import React from 'react';
import { 
    Text, 
    Image, 
    View, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar,
    Pressable, 
    Linking
} from 'react-native';

const colorGithub = '#010409';
const fontColorGithub = '#C9D1D9';
const fontDarkColorGithub = '#4F565E';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/107887392?v=4';
const gitHubLink = 'https://github.com/gugacosta99';

const styles = StyleSheet.create({
    center: {
      alignItems: 'center',
      backgroundColor: colorGithub,
      flex: 1,
      justifyContent: 'center',
    },
    text: {
        fontSize: 50, 
        fontWeight: 'bold',
        color: 'white'
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    defaultText: {
        color: fontColorGithub,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
    },
    nickname: {
        fontSize: 20,
        color: fontDarkColorGithub,
    },
    description: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    textButton: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 20,
        backgroundColor: fontDarkColorGithub,
        borderRadius: 20,
        padding: 20,
    },
})

const LotsOfGreetings = () => {

    const goToGitHub = async ()=> {
        console.log("Verificando Link");

        const res = await Linking.canOpenURL(gitHubLink);
        console.log("Link Aprovado");

        if(res){
            await Linking.openURL(gitHubLink);
        }
    }

  return (
    <SafeAreaView style={styles.center}>
        <StatusBar backgroundColor={colorGithub} barStyle={'light-content'}></StatusBar>

        <View style={styles.content}>
            <Image source={{uri: imageProfileGithub}} style={styles.avatar}></Image>
        </View>

        <View style={styles.content}>
            <Text style={[styles.defaultText, styles.name]}>Gustavo Costa</Text>
            <Text style={[styles.defaultText, styles.nickname]}>gugacosta99</Text>
            <Text style={[styles.defaultText, styles.description]}>
                Software engineer | FullStack and Mobile developer | Prof. at ASES Banca de Estudos @asesbancadeestudos
            </Text>
        </View>

        <Pressable onPress={goToGitHub}>
            <View style={styles.button}>
                <Text style={[styles.defaultText, styles.textButton]}>Open in GitHub</Text>
            </View>
        </Pressable>
    </SafeAreaView>
  );
}

export default LotsOfGreetings;