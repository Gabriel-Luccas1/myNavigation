import React from 'react'
import { View, Text } from 'react-native'

export default function Contacts({navigation}){
    return(
        <View style={{marginTop:60}}>
            <View>
                <Text>Nome: Fabio Silva</Text>
                <Text>Telefone: (61) 99815-9099</Text>
                <Text
                onPress={()=> navigation.navigate('Information',
                {
                    nome: 'Fabio Silva', 
                    telefone: '(61) 99815-9099',
                    endereco: 'SHVP Rua 3',
                    numero: '06',
                    profissao: 'Carpinteiro',
                    email: 'fabio.carp@gmail.com'
                }
                )}
                >Information...</Text>
            </View>
            <View style={{marginTop:20}}>
                <Text>Nome: Pedro Augusto</Text>
                <Text>Telefone: (61) 99815-8879</Text>
                <Text
                onPress={()=> navigation.navigate('Information',
                {
                    nome: 'Pedro Augusto', 
                    telefone: '(61) 99815-8879',
                    endereco: 'SHVP Rua 6',
                    numero: '04',
                    profissao: 'Advogado',
                    email: 'pedro.adv@gmail.com'
                }
                )}
                >Information...</Text>
            </View>
        </View>
    )
}