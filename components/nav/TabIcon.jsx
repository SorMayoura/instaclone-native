import {Ionicons} from "@expo/vector-icons";

export default TabIcon = ({iconName, color, focused}) => {
    
    return (        
        <Ionicons
            name={focused? iconName : `${iconName}-outline`}
            color={color}
            size={22}
        />
    );
}