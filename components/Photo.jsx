import { PropTypes } from "prop-types";
import { useWindowDimensions } from "react-native";
import styled from "styled-components/native";

const Container = styled.View``;
const Header = styled.View``;
const UserAvarta = styled.Image``;
const UserName = styled.Text`
    color: white;
`;
const File = styled.Image``;
const Actions = styled.View``;
const Action = styled.TouchableOpacity``;
const Likes = styled.Text`
color: white;`;
const Caption = styled.View``;
const CaptionText = styled.Text`
color: white;
`;

export function Photo({id, user_ref, caption, file, isLiked, likes}) {
    console.log(id, user_ref, caption, file, isLiked, likes);
    const { width, height } = useWindowDimensions();
    return (
        <Container>
            <Header>
                <UserAvarta />
                <UserName>{user_ref.userName}</UserName>
            </Header>
            <File 
                style={{
                    width,
                    height: height - 500,
                }}
                source={{uri:file}} 
            />

            <Actions>
                <Action /> 

                <Action />
            </Actions>

            <Likes>{likes === 1 ? "1 like" : `${likes} likes`}</Likes>
            <Caption>
                <UserName>{user_ref.UserName}</UserName>
                <CaptionText>{caption}</CaptionText>
            </Caption>
        </Container>
    )
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
}