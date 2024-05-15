import React, {useState} from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default ({route,navigation}) => {

    const [user, setUser] = useState(route.params ? route.params : {})

    return(
        <View>
            <Text>Nome</Text>
            <TextInput
                onChangeText={name => setUser({...user, name})}
                placeholder="Informe seu nome"
                value={user.name}
            />
            <Text>E-mail</Text>
            <TextInput
                onChangeText={email => setUser({...user, email})}
                placeholder="Informe seu email"
                value={user.email}
            />
            <Text>URL Avatar</Text>
            <TextInput
                onChangeText={avatarURL => setUser({...user, avatarURL})}
                placeholder="Informe a URL do seu avatar"
                value={user.avatarURL}
            />
            <Button
                title="Salvar"
                onPress={() => {
                    navigation.goBack()
                }}
            />
        </View>
    )

}