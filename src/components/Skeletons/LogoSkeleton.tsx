import { StyleSheet, View } from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

type Props = {
  rows: number;
}

const LogoSkeleton = ({rows}: Props) => {

  const renderRows = () => {
    let rowElements = [];
    for (let i = 0; i < rows; i++) {
      rowElements.push(
        <SkeletonPlaceholder key={i}>
            <View style={{alignItems: 'center'}}>
              <SkeletonPlaceholder.Item width={100} height={100} borderRadius={99} opacity={0.5} marginHorizontal={10} marginBottom={5}/>
                <SkeletonPlaceholder.Item width={100} height={15} borderRadius={3} opacity={0.5} marginBottom={5} />
                <SkeletonPlaceholder.Item width={50} height={15} borderRadius={3} opacity={0.5} marginBottom={5}  />
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

export default LogoSkeleton;

const styles = StyleSheet.create({});