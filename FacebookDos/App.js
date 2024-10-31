import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

const App = () => {
  const [imageUri, setImageUri] = useState('https://static.vecteezy.com/system/resources/previews/005/005/840/non_2x/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg');

  const pickImageGaleria = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (permissionResult.granted === false) {
      alert('Se requieren permisos para acceder a la galería');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const pickImageFoto = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    
    if (permissionResult.granted === false) {
      alert('Se requieren permisos para acceder a la cámara');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <View style={style.container}>
      <View style={style.subcontainer}>
        <Text style={style.title}>Inicio de Sesion</Text>
        
        <TouchableOpacity onPress={pickImageGaleria}>
          <Image source={{ uri: imageUri }} style={style.image} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Sharing.shareAsync(imageUri)} style={style.buton3}>
          <Text style={style.butontext}>COMPARTIR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.buton2} onPress={pickImageFoto}>
          <Text style={style.butontext}>TOMAR UNA FOTO</Text>
        </TouchableOpacity>

        <View style={style.subcontainer2}>
          <Text style={style.subtitle}>Nombre de usuario:</Text>
          <TextInput style={style.input} placeholder="Nombre" />
          <Text style={style.subtitle}>Contraseña:</Text>
          <TextInput style={style.input} placeholder="Contraseña" secureTextEntry />
        </View>

        <TouchableOpacity style={style.buton} onPress={() => alert('Usuario Registrado')}>
          <Text style={style.butontext}>ACEPTAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  subcontainer: {
    backgroundColor: '#1e1e1e',
    borderColor: '#294AEC',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    borderRadius: 50
  },
  subcontainer2: {
    marginTop: 25,
    marginBottom: 15
  },
  title: {
    fontFamily: 'Courier',
    fontSize: 20,
    fontWeight: '500',
    color: '#e0ffff'
  },
  subtitle: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: '#87cefa'
  },
  image: {
    height: 180,
    width: 180,
    borderRadius: 5,
    marginTop: 25,
    borderColor: '#294AEC'
  },
  input: {
    padding: 5,
    height: 40,
    width: 200,
    borderRadius: 5,
    borderColor: '#5975FE',
    borderWidth: 1.5
  },
  buton: {
    height: 30,
    width: 90,
    backgroundColor: '#191970',
    borderRadius: 8,
    borderColor: '#5975fe',
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buton2: {
    height: 30,
    width: 120,
    backgroundColor: '#191970',
    borderRadius: 8,
    borderColor: '#5975fe',
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buton3: {
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    height: 30,
    width: 90,
    backgroundColor: '#191970',
    borderRadius: 8,
    borderColor: '#5975fe',
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  butontext: {
    color: '#FFF',
    fontSize: 12,
    justifyContent: 'center'
  }
});

export default App;