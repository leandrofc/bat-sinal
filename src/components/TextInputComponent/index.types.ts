import { RefObject } from "react";
import type { NativeSyntheticEvent, TextInput, TextInputSubmitEditingEventData } from "react-native";

export interface TextInputComponentProps {
    label: string,
    placeholder: string,
    value: string,
    onChangeText: (text: string) => void,
    isTextArea?: boolean,
    returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send' | 'none' | 'previous' | 'default' | 'emergency-call' | 'google' | 'join' | 'route' | 'yahoo';
    onSubmitEditing?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
    ref?: RefObject<TextInput | null>;
    blurOnSubmit?: boolean,
    keyboardType?: 
        | 'default'
        | 'email-address'
        | 'numeric'
        | 'phone-pad'
        | 'number-pad'
        | 'decimal-pad'
        | 'visible-password'
        | 'url'
        | 'name-phone-pad'
        | 'twitter'
        | 'web-search';
}