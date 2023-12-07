import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export const NotificationSkeleton = ({color}) => {
  return (
    <View style={{marginBottom: 25}}>
      <SkeletonPlaceholder
        borderRadius={4}

        //backgroundColor={color ? color : COLOUR_SECONDARY_GREY}
      >
        <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
          <SkeletonPlaceholder.Item width={40} height={40} borderRadius={50} />
          <SkeletonPlaceholder.Item marginLeft={20}>
            <SkeletonPlaceholder.Item width={135} height={15} />
            <SkeletonPlaceholder.Item marginTop={6} width={270} height={15} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  );
};

export const SessionSkeleton = ({height, marginTop, marginBottom}) => {
  return (
    <SkeletonPlaceholder borderRadius={10}>
      <SkeletonPlaceholder.Item
        width="100%"
        height={height ? height : 61}
        marginTop={marginTop}
        marginBottom={marginBottom}
      />
    </SkeletonPlaceholder>
  );
};

export const TextSkeleton = ({width, marginTop, marginBottom}) => {
  return (
    <SkeletonPlaceholder borderRadius={10}>
      <SkeletonPlaceholder.Item
        width={width ? width : 70}
        height={15}
        marginTop={marginTop}
        marginBottom={marginBottom}
      />
    </SkeletonPlaceholder>
  );
};

export const AppointmentSkeleton = () => {
  return (
    <View
      style={{
        marginTop: 10,
        marginBottom: 15,
        backgroundColor: 'white',
        width: '100%',
        height: 124,
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        padding: 10,
      }}>
      <SkeletonPlaceholder borderRadius={4}>
        <SkeletonPlaceholder.Item flexDirection="row">
          <SkeletonPlaceholder.Item width={40} height={40} borderRadius={50} />
          <SkeletonPlaceholder.Item marginLeft={30}>
            <SkeletonPlaceholder.Item width={225} height={15} />

            <SkeletonPlaceholder.Item
              flexDirection="row"
              alignItems="center"
              gap={25}>
              <SkeletonPlaceholder.Item marginTop={8} width={100} height={15} />
              <SkeletonPlaceholder.Item marginTop={8} width={100} height={15} />
            </SkeletonPlaceholder.Item>

            <SkeletonPlaceholder.Item
              flexDirection="row"
              alignItems="center"
              gap={25}>
              <SkeletonPlaceholder.Item marginTop={8} width={100} height={25} />
              <SkeletonPlaceholder.Item marginTop={8} width={100} height={25} />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  );
};
