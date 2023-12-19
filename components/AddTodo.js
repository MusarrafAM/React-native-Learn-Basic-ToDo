import { useState } from "react"
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


const AddTodo = ({submitHandler} ) => {
    const [text, settext] = useState('')

  return (
    <View>
        <TextInput 
            style={styles.input}
            placeholder="New Todo..."
            onChangeText={(val) =>settext(val)}
        />
        <Button onPress={()=> submitHandler(text)} title="Add Todo" color="coral"/>
    </View>
  )
}

const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'

    }
})

export default AddTodo