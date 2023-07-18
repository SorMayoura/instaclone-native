import { gql, useQuery } from "@apollo/client";
import { FlatList, RefreshControl  } from "react-native";
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from "../fragments";
import { ScreenLayout } from "../components/ScreenLayout";
import { Photo } from "../components/Photo";
import { useState } from "react";

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
  const { data, loading, refetch } = useQuery(FEED_QUERY);

  const renderPhoto = ({ item: photo }) => {
    return <Photo {...photo} />;
  };

  const refresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  const [refreshing, setRefreshing] = useState(false);
  return (
    <ScreenLayout loading={loading}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refresh} />
        }
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
        data={data?.seeFeed?.data}
        keyExtractor={(photo) => "" + photo.id}
        renderItem={renderPhoto}
      />
    </ScreenLayout>
  );
}
