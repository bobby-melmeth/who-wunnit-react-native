import { StyleSheet, View } from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

type Props = {
  rows: number;
}

const SkeletonMain = ({rows}: Props) => {

  const renderRows = () => {
    let rowElements = [];
    for (let i = 0; i < rows; i++) {
      rowElements.push(
        <SkeletonPlaceholder key={i}>
          <View>
            <View style={{ marginVertical: 10, marginLeft: 14, flexDirection: 'row' }}>
              <SkeletonPlaceholder.Item width={70} height={70} borderRadius={3} opacity={0.5} />
              <View style={{ flexDirection: 'column', marginLeft: 10, justifyContent: 'space-around' }}>
                <SkeletonPlaceholder.Item width={100} height={15} borderRadius={3} opacity={0.5} marginTop={5} />
                <SkeletonPlaceholder.Item width={70} height={15} borderRadius={3} opacity={0.5} marginBottom={5} />
              </View>
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

export default SkeletonMain;

const styles = StyleSheet.create({});