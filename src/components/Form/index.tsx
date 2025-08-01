import { TextInput, View } from "react-native"
import { BatLogo } from "../BatLogo"
import { TextInputComponent } from "../TextInputComponent"
import Button from "../Button"
import { styles } from "./index.styles"
import { FormProps } from "./index.types"
import { useRef, useState } from "react"

const Form = ({ sendFunction }: FormProps) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");
    const [observation, setObservation] = useState("");

    const handleSubmit = () => {
        console.log({
            name,
            phone,
            location,
            observation
        });
        sendFunction();
    };

    const phoneRef = useRef<TextInput>(null);
    const locationRef = useRef<TextInput>(null);
    const observationRef = useRef<TextInput>(null);

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
                    returnKeyType="next"
                    onSubmitEditing={() => phoneRef.current?.focus()}
                />
                <TextInputComponent 
                    label="Phone"
                    onChangeText={setPhone}
                    placeholder="Type Your phone"
                    value={phone}
                    ref={phoneRef}
                    returnKeyType="next"
                    onSubmitEditing={() => locationRef.current?.focus()}
                />
                <TextInputComponent 
                    label="Location"
                    onChangeText={setLocation}
                    placeholder="Type Your location"
                    value={location}
                    ref={locationRef}
                    returnKeyType="next"
                    onSubmitEditing={() => observationRef.current?.focus()}
                />
                <TextInputComponent 
                    label="Observation"
                    onChangeText={setObservation}
                    placeholder="Type Your observation"
                    value={observation}
                    isTextArea
                    ref={observationRef}
                    returnKeyType="done"
                    onSubmitEditing={handleSubmit}
                    blurOnSubmit={true}
                />
                <Button
                    text="Send"
                    onPress={handleSubmit}
                />
            </View>
        </View>
    )
}

export default Form;