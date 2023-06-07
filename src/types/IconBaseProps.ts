import { StyleProp, ViewStyle } from "react-native"

export interface IconBaseProps {
    onPress?: () => void
    style?: StyleProp<ViewStyle>
    color?: string

}