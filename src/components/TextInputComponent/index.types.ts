export interface TextInputComponentProps {
    label: string,
    placeholder: string,
    value: string,
    onChangeText: (text: string) => void,
    isTextArea?: boolean,
}