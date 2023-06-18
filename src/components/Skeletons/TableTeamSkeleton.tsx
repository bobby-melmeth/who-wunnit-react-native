import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

interface TableTeamSkeletonProps {
    rows: number
}

const TableTeamSkeleton: FC<TableTeamSkeletonProps> = ({ rows }) => {

    const renderRows = () => {
        let rowElements = [];
        for (let i = 0; i < rows; i++) {
            rowElements.push(
                <SkeletonPlaceholder key={i}>

                    <View style={{   flexDirection: 'row'}}>

                        <SkeletonPlaceholder.Item width={30} height={30} borderRadius={70} opacity={0.5}  />

                        <View style={{ flexDirection: 'row', marginLeft: 10, alignItems: 'center' }}>

                            <SkeletonPlaceholder.Item width={100} height={15} borderRadius={3} opacity={0.5} marginRight={50} />
                            <View style={{ flexDirection: 'row', width: 165, justifyContent: 'space-between'}}>
                            <SkeletonPlaceholder.Item width={15} height={15} borderRadius={3} opacity={0.5} marginHorizontal={5} />
                            <SkeletonPlaceholder.Item width={15} height={15} borderRadius={3} opacity={0.5} marginHorizontal={5} />
                            <SkeletonPlaceholder.Item width={15} height={15} borderRadius={3} opacity={0.5} marginHorizontal={5} />
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

export default TableTeamSkeleton;