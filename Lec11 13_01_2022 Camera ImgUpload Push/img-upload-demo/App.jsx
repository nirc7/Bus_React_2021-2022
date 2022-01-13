import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const btnImgUpload = () => {
    console.log(1);
    imageUpload(
      'https://upload.wikimedia.org/wikipedia/commons/2/25/Coldplay_%282842037407%29.jpg'
      , 'coldplay1.jpg');
  }

  const imageUpload = (imgUri, picName) => {
    let urlAPI = "https://proj.ruppin.ac.il/igroup96/prod/uploadpicture";
    let dataI = new FormData();

    dataI.append('picture', {
      uri: imgUri,
      name: picName,
      type: 'image/jpg'
    });

    const config = {
      method: 'POST',
      body: dataI,
    }

    fetch(urlAPI, config)
      .then((res) => {
        if (res.status == 201) { return res.json(); }
        else { return "err"; }
      })
      .then((responseData) => {
        if (responseData != "err") {
          let picNameWOExt = picName.substring(0, picName.indexOf("."));
          let imageNameWithGUID = responseData.substring(responseData.indexOf(picNameWOExt),
            responseData.indexOf(".jpg") + 4);
          console.log(imageNameWithGUID);
          console.log("img uploaded successfully!");
        }
        else { alert('error uploding ...'); }
      })
      .catch(err => { alert('err upload= ' + err); });
  }

  return (
    <View style={styles.container}>
      <Text style={{ margin: 20, fontSize: 20 }}>Img Upload app!</Text>
      <Button title='img upload' onPress={btnImgUpload} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
