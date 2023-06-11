import { StyleSheet, View } from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

type Props = {
  rows: number;
}

const PlayerSkeleton = ({rows}: Props) => {

  const renderRows = () => {
    let rowElements = [];
    for (let i = 0; i < rows; i++) {
      rowElements.push(
        <SkeletonPlaceholder key={i}>

            <View style={{ marginVertical: 10, marginLeft: 14, alignItems: 'center', }}>
              <SkeletonPlaceholder.Item width={70} height={70} borderRadius={70} opacity={0.5} />

              <View style={{ flexDirection: 'column', marginLeft: 10, justifyContent: 'center', }}>
                <SkeletonPlaceholder.Item width={100} height={15} borderRadius={3} opacity={0.5} marginVertical={5} />
                <SkeletonPlaceholder.Item width={70} height={15} borderRadius={3} opacity={0.5} marginBottom={5} alignSelf={'center'} />
              </View>
            </View>

        </SkeletonPlaceholder>
      );
    }
    return rowElements;
  };

  return (
    <>
      {renderRows()}
    </>
  )

};

export default PlayerSkeleton;

const styles = StyleSheet.create({});