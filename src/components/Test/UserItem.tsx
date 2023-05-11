import React, { useState } from 'react';
import {
  Box,
  Text,
  ITextProps,
  HStack,
  Stack,
  Pressable,
  Avatar,
  Spacer,
} from 'native-base';

type Props = ITextProps & {
  item?: any;
  onPress?: () => void;
  index?: any;
};

export const UserItem = ({ item, onPress, index }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      _disabled={{ opacity: 50 }}
      _pressed={{ opacity: 50 }}>
      <Box
        key={index}
        borderBottomWidth="1"
        _dark={{
          borderColor: 'muted.50',
        }}
        borderColor="muted.800"
        pl={['0', '4']}
        pr={['0', '5']}
        py="2">
        <HStack space={[2, 3]} justifyContent="space-between">
          <Avatar
            size="48px"
            source={{
              uri: item?.avatar,
            }}
          />
          <Stack>
            <Text color="black">{item?.userName}</Text>
            <Text
              _dark={{
                color: 'black',
              }}
              color="black"
              bold>
              {item?.name}
            </Text>
            <HStack>
              <Text
                color="coolGray.600"
                _dark={{
                  color: 'black',
                }}>
                {item?.company}
              </Text>
              <Text
                color="coolGray.600"
                _dark={{
                  color: 'black',
                }}>
                {item?.location}
              </Text>
            </HStack>
          </Stack>
          <Spacer />
          <Text
            fontSize="xs"
            _dark={{
              color: 'warmGray.50',
            }}
            color="coolGray.800"
            alignSelf="flex-start">
            {item?.userName}
          </Text>
        </HStack>
      </Box>
    </Pressable>
  );
};
