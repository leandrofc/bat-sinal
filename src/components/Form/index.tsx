import { TextInput, TouchableWithoutFeedback, View, Keyboard, KeyboardAvoidingView, Platform, ScrollView, Alert } from "react-native"
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
        Alert.alert(
            "Send bat signal",
            `${name || "Hey"}, are you sure you want to proceed with the call?`,
            [
              { text: "No", onPress: () => {}, style: "cancel" },
              { text: "Yes", onPress: () => sendFunction() }
            ],
            { cancelable: false }
          );
    };

    const scrollViewRef = useRef<ScrollView>(null);
    const nameRef = useRef<TextInput>(null);
    const phoneRef = useRef<TextInput>(null);
    const locationRef = useRef<TextInput>(null);
    const observationRef = useRef<TextInput>(null);

    const onFocusInput = (inputRef: React.RefObject<TextInput | null>) => {
        setTimeout(() => {
          inputRef.current?.measure((x, y, width, height, pageX, pageY) => {
            scrollViewRef.current?.scrollTo({ y: pageY - 100, animated: true });
          });
        }, 100);
    };
      
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // diferente para iOS e Android
            keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0} // ajuste de distância
        >
            <ScrollView keyboardShouldPersistTaps="handled" ref={scrollViewRef}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                            ref={nameRef}
                            returnKeyType="next"
                            onSubmitEditing={() => phoneRef.current?.focus()}
                            onFocus={() => onFocusInput(nameRef)}
                        />
                        <TextInputComponent 
                            keyboardType="phone-pad"
                            label="Phone"
                            onChangeText={setPhone}
                            placeholder="Type Your phone"
                            value={phone}
                            ref={phoneRef}
                            returnKeyType="next"
                            onSubmitEditing={() => locationRef.current?.focus()}
                            onFocus={() => onFocusInput(phoneRef)}
                        />
                        <TextInputComponent 
                            label="Location"
                            onChangeText={setLocation}
                            placeholder="Type Your location"
                            value={location}
                            ref={locationRef}
                            returnKeyType="next"
                            onSubmitEditing={() => observationRef.current?.focus()}
                            onFocus={() => onFocusInput(locationRef)}
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
                            onFocus={() => onFocusInput(observationRef)}
                        />
                        <Button
                            text="Send"
                            onPress={handleSubmit}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Form;