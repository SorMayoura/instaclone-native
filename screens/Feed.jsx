import { gql, useQuery } from "@apollo/client";
import { View, Text } from "react-native";
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from "../fragments";
import { ScreenLayout } from "../components/ScreenLayout";
import { FlatList } from "react-native-gesture-handler";

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
  console.log("Data---------", data.seeFeed);
  const renderPhoto = ({ item: photo }) => {
    console.log("Photo---------", photo);
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ color: "white" }}> {photo.caption} </Text>
      </View>
    );
  };

  return (
    <ScreenLayout loading={loading}>
      <FlatList
        data={data?.seeFeed?.data}
        keyExtractor={(photo) => "" + photo.id}
        renderItem={renderPhoto}
        />
    </ScreenLayout>
  );
}
