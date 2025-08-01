import { View } from "react-native"
import { BatLogo } from "../BatLogo"
import { TextInputComponent } from "../TextInputComponent"
import Button from "../Button"
import { styles } from "./index.styles"
import { FormProps } from "./index.types"

const Form = ({ sendFunction }: FormProps) => {
    return (
        <View style={styles.container}>
            <View>
                <BatLogo isSmall />
            </View>
            <View style={styles.inputsContainer}>
                <TextInputComponent 
                    label="Name"
                    onChange={() => {}}
                    placeholder="Type Your name"
                    value=""
                />
                <TextInputComponent 
                    label="Phone"
                    onChange={() => {}}
                    placeholder="Type Your phone"
                    value=""
                />
                <TextInputComponent 
                    label="Location"
                    onChange={() => {}}
                    placeholder="Type Your location"
                    value=""
                />
                <TextInputComponent 
                    label="Observation"
                    onChange={() => {}}
                    placeholder="Type Your observation"
                    value=""
                    isTextArea
                />
                <Button
                    text="Send"
                    onPress={sendFunction}
                />
            </View>
        </View>
    )
}

export default Form;