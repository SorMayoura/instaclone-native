import {Ionicons} from "@expo/vector-icons";

export default TabIcon = ({iconName, color, focused}) => {
    console.log(focused, color, iconName);
    return (        
        <Ionicons
            name={focused? iconName : `${iconName}-outline`}
            color={color}
            size={22}
        />
    );
}