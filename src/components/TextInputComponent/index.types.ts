export interface TextInputComponentProps {
    label: string,
    placeholder: string,
    value: string,
    onChange: () => {},
    isTextArea?: boolean,
}