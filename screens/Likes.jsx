import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { USER_FRAGMENT } from "../fragments";
import UserRow from "../components/UserRow";
import { ScreenLayout } from "../components/ScreenLayout";

const LIKE_QUERY = gql`
  query seePhotoLike ($photoId: Int!) {
    seePhotoLike (photoId: $photoId) {
      data {
        ...UserFragment
      }
    }
  }
  ${USER_FRAGMENT}
`;

export default function Likes({route}) {
  const [refreshing, setRefreshing] = useState(false);
  
  const {data, loading, refetch} = useQuery(LIKE_QUERY, {
    variables: {
      photoId: route?.params?.photoId,
    },
    skip: !route?.params?.photoId
  });

  const renderUser = ({ item: user}) => {
    return <UserRow {...user} />;
  };

  const onRefresh = async function (){
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  return (
    <ScreenLayout loading={loading}>
      <FlatList
        refreshing={refreshing}
        onRefresh={onRefresh}
        data={data?.seePhotoLike?.data}
        keyExtractor={(item) => "" + item.id}
        renderItem={renderUser}
        style={{width: "100%"}}
      />
    </ScreenLayout>
  );
}