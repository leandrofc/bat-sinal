export interface TextInputComponentProps {
    label: string,
    placeholder: string,
    value: string,
    onChange: () => void,
    isTextArea?: boolean,
}