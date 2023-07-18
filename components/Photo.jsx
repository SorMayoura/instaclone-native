import { useNavigation } from "@react-navigation/native";
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import { Image, useWindowDimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const Container = styled.View``;
const Header = styled.TouchableOpacity`
  padding: 10px;
  flex-direction: row;
  align-items: center;
`;

const UserAvarta = styled.Image`
  margin-right: 10px;
  width: 25px;
  height: 25px;
  border-radius: 12.5px;
`;
const UserName = styled.Text`
  color: white;
  font-weight: 600;
`;
const File = styled.Image``;

const Actions = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Action = styled.TouchableOpacity`
  margin-right: 10px;
`;

const Likes = styled.Text`
  color: white;
  margin: 7px 0px;
  font-weight: 600;
`;
const Caption = styled.View`
    flex-direction: row;
`;
const CaptionText = styled.Text`
  color: white;
  margin-left: 5px;
`;

const ExtraContainer = styled.View`
  padding: 10px;
`;

export function Photo({ id, user_ref, caption, file, isLiked, likes }) {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();
  const [imageHeight, setImageHeight] = useState(height - 450);

  useEffect(() => {
    Image.getSize(file, (width, height) => {
      setImageHeight(height / 3);
    });
  }, [file]);
  console.log(id, user_ref, caption, file, isLiked, likes);

  return (
    <Container>
      <Header onPress={() => navigation.navigate("Profile")}>
        <UserAvarta resizeMode="cover" source={{ uri: user_ref.avarta }} />
        <UserName>{user_ref.userName}</UserName>
      </Header>
      <File
        style={{
          width,
          height: imageHeight,
        }}
        source={{ uri: file }}
      />
      <ExtraContainer>
        <Actions>
          <Action>
            <Ionicons 
                name={isLiked ? "heart" : "heart-outline"} 
                color={isLiked ? "tomato": "white"}
                size={22}
            />
          </Action>

          <Action onPress={() => navigation.navigate("Comments")}>
            <Ionicons
                name="chatbubble-outline"
                color={"white"}
                size={22}
            />
            
          </Action>
        </Actions>

        <TouchableOpacity onPress={() => navigation.navigate("Likes")}>
            <Likes>{likes === 1 ? "1 like" : `${likes} likes`}</Likes>
        </TouchableOpacity>
        
        <Caption>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <UserName>{user_ref.userName}</UserName>
          </TouchableOpacity>
          <CaptionText>{caption}</CaptionText>
        </Caption>
      </ExtraContainer>
    </Container>
  );
}

Photo.propTypes = {
  id: PropTypes.number.isRequired,
  user_ref: PropTypes.shape({
    avarta: PropTypes.string,
    userName: PropTypes.string.isRequired,
  }),
  caption: PropTypes.string,
  file: PropTypes.string.isRequired,
  isLiked: PropTypes.string.isRequired,
  likes: PropTypes.string.isRequired,
  commentNumber: PropTypes.number.isRequired,
};
