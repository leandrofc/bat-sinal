import { View } from "react-native"
import { BatLogo } from "../BatLogo"
import Button from "../Button"
import { styles } from "./index.styles"

const CallBatSinal = () => {
    return (
        <View style={styles.container}>
            <View>
                <BatLogo/>
            </View>
            <View style={styles.buttonContainer}>
                <Button text="ACTIVATED BAT SINAL" onPress={() => {console.log("oi")}} />
            </View>
        </View>
    )
}

export default CallBatSinal;