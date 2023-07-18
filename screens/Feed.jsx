import { gql, useQuery } from "@apollo/client";
import { FlatList, RefreshControl  } from "react-native";
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from "../fragments";
import { ScreenLayout } from "../components/ScreenLayout";
import { Photo } from "../components/Photo";
import { useState } from "react";

const FEED_QUERY = gql`
  query seeFeed ($offset: Int!) {
    seeFeed(offset: $offset) {
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
  // const [offset, setOffset] = useState(0);
  const { data, loading, refetch, fetchMore } = useQuery(FEED_QUERY, {
    variables:{
      offset:0,
    },
    //notifyOnNetworkStatusChange:true
  });

  const renderPhoto = ({ item: photo }) => {
    return <Photo {...photo} />;
  };

  const refresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

   console.log(data?.seeFeed?.data);
  const [refreshing, setRefreshing] = useState(false);
  return (
    
    <ScreenLayout loading={loading}>
      <FlatList
        onEndReachedThreshold={0}
        onEndReached={() =>
          fetchMore({
            variables: {
              offset: data?.seeFeed?.data.length,
            },
          })
        }
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
