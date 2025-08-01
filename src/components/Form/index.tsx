import { View } from "react-native"
import { BatLogo } from "../BatLogo"
import { TextInputComponent } from "../TextInputComponent"
import Button from "../Button"
import { styles } from "./index.styles"
import { FormProps } from "./index.types"
import { useState } from "react"

const Form = ({ sendFunction }: FormProps) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");
    const [observation, setObservation] = useState("");

    const handleSend = () => {
        console.log({
            name,
            phone,
            location,
            observation
        });
        sendFunction();
    };

    return (
        <View style={styles.container}>
            <View>
                <BatLogo isSmall />
            </View>
            <View style={styles.inputsContainer}>
                <TextInputComponent 
                    label="Name"
                    onChangeText={setName}
                    placeholder="Type Your name"
                    value={name}
                />
                <TextInputComponent 
                    label="Phone"
                    onChangeText={setPhone}
                    placeholder="Type Your phone"
                    value={phone}
                />
                <TextInputComponent 
                    label="Location"
                    onChangeText={setLocation}
                    placeholder="Type Your location"
                    value={location}
                />
                <TextInputComponent 
                    label="Observation"
                    onChangeText={setObservation}
                    placeholder="Type Your observation"
                    value={observation}
                    isTextArea
                />
                <Button
                    text="Send"
                    onPress={handleSend}
                />
            </View>
        </View>
    )
}

export default Form;