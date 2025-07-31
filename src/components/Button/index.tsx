import { Pressable, Text } from "react-native"
import { styles } from "./index.styles"
import { ButtonProps } from "./index.types"

const Button = ({ text, onPress }: ButtonProps) => (
    <Pressable
        onPress={onPress}
        style={styles.container}
    >
        <Text style={styles.text}> 
            {text}
        </Text>
    </Pressable>
)

export default Button;