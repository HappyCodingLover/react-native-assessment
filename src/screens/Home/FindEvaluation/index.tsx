import React, { useEffect, useState } from 'react';
import {
  HStack,
  Stack,
  Box,
  Text,
  Pressable,
  Image,
  ScrollView,
  Center,
  FlatList,
  Input,
  Select,
  CheckIcon,
} from 'native-base';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { BottomTab, EvaluatingItem } from 'components';
import { RootStackParamList } from 'types';

import { Images } from 'assets';

const FindEvaluation = () => {
  const [sport, setSport] = useState<string>();
  const [state, setState] = useState<string>();
  const [event, setEvent] = useState<string>();
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  const goEvaluationItemHandler = () => {
    navigate('HomeNavigation', { screen: 'EventItem' });
  };
  return (
    <Box flex={1}>
      <Stack px={6} space={1} paddingTop={1}>
        <Stack>
          <Text fontSize={10} fontWeight="bold">
            SEARCH FOR EVALUATION NEAR YOU
          </Text>
          <Input height={8} fontSize={12} placeholder="Filter by Sport" />
        </Stack>
        <Stack>
          <Text fontSize={10} fontWeight="bold">
            FILTERS
          </Text>
          <Stack space={1} justifyContent="space-between" paddingBottom={2}>
            <Select
              selectedValue={sport}
              minWidth="200"
              maxHeight={8}
              accessibilityLabel="Filter by Sport"
              placeholder="Filter by Sport"
              _selectedItem={{
                bg: '#0a3254',
                endIcon: <CheckIcon size="2" />,
              }}
              onValueChange={itemValue => setSport(itemValue)}>
              <Select.Item label="Baseball" value="Baseball" />
              <Select.Item label="FastPitch" value="FastPitch" />
            </Select>
            <Select
              selectedValue={event}
              minWidth="200"
              maxHeight={8}
              accessibilityLabel="Filter by Sport"
              placeholder="Filter by Sport"
              _selectedItem={{
                bg: '#0a3254',
                endIcon: <CheckIcon size="2" />,
              }}
              onValueChange={itemValue => setState(itemValue)}>
              <Select.Item label="Baseball" value="Baseball" />
              <Select.Item label="FastPitch" value="FastPitch" />
            </Select>
            <Select
              selectedValue={event}
              minWidth="200"
              maxHeight={8}
              accessibilityLabel="Filter by Sport"
              placeholder="Filter by Sport"
              _selectedItem={{
                bg: '#0a3254',
                endIcon: <CheckIcon size="2" />,
              }}
              onValueChange={itemValue => setEvent(itemValue)}>
              <Select.Item label="Baseball" value="Baseball" />
              <Select.Item label="FastPitch" value="FastPitch" />
            </Select>
          </Stack>
        </Stack>
        {/* <Image
          source={Images.MapImage}
          resizeMode="cover"
          height={150}
          borderRadius={3}
          mb={1}
        /> */}
      </Stack>

      <ScrollView px={6}>
        <Stack space={2} paddingBottom={3}>
          <EvaluatingItem
            image={Images.CSECampImage}
            title="May 26, 2023 Memorial Day Alliance CSE Camp"
            info="Jim Elliot High School"
            details="May 26, 2023 @ 5:00PM America/Los_Angeles"
            onPress={goEvaluationItemHandler}
          />
          <EvaluatingItem
            image={Images.MQDefenseImage}
            title="June 9, 2023 Zoom Into June CSE Camp"
            details="May 26, 2023 @ 5:00PM America/Los_Angeles"
            info="Big League Dreams, Chino"
            onPress={goEvaluationItemHandler}
          />
          <EvaluatingItem
            image={Images.PathwayMapImage}
            title="May 26, 2023 Memorial Day Alliance CSE Camp"
            info="Jim Elliot High School"
            details="May 26, 2023 @ 5:00PM America/Los_Angeles"
            onPress={goEvaluationItemHandler}
          />
          <EvaluatingItem
            image={Images.MQDefenseImage}
            title="June 9, 2023 Zoom Into June CSE Camp"
            details="May 26, 2023 @ 5:00PM America/Los_Angeles"
            info="Big League Dreams, Chino"
            onPress={goEvaluationItemHandler}
          />
          <EvaluatingItem
            image={Images.MQHittingImage}
            title="May 26, 2023 Memorial Day Alliance CSE Camp"
            info="Jim Elliot High School"
            details="May 26, 2023 @ 5:00PM America/Los_Angeles"
            onPress={goEvaluationItemHandler}
          />
          <EvaluatingItem
            image={Images.MQPitchingImage}
            title="June 9, 2023 Zoom Into June CSE Camp"
            details="May 26, 2023 @ 5:00PM America/Los_Angeles"
            info="Big League Dreams, Chino"
            onPress={goEvaluationItemHandler}
          />
        </Stack>
      </ScrollView>
      <BottomTab />
    </Box>
  );
};

export default FindEvaluation;
