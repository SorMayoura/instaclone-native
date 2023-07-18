import { gql, useQuery } from "@apollo/client";
import { View, Text } from "react-native";
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from "../fragments";
import { ScreenLayout } from "../components/ScreenLayout";
import { FlatList } from "react-native-gesture-handler";
import { Photo } from "../components/Photo";

const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      data {
        ...PhotoFragment
        user_ref {
          userName
          avarta
        }
        caption
        comments {
          ...CommentFragment
        }
        isMine
        createdAt
      }
      message
      status
    }
  }
  ${COMMENT_FRAGMENT}
  ${PHOTO_FRAGMENT}
`;

export default function Feed({ navigation }) {
  const { data, loading } = useQuery(FEED_QUERY);

  console.log(data);
  const renderPhoto = ({ item: photo }) => {
    return <Photo {...photo} />
  };

  return (
    <ScreenLayout loading={loading}>
      <FlatList    
        // refreshing={refreshing}  
        style={{width: "100%"}}
        showsVerticalScrollIndicator={false}
        data={data?.seeFeed?.data}
        keyExtractor={(photo) => "" + photo.id}
        renderItem={renderPhoto}
        />
    </ScreenLayout>
  );
}
