import { Box, HStack, Image, Stack, Text, ScrollView } from 'native-base';
import React, { useLayoutEffect, useEffect, useState } from 'react';
import { Button, Label, BottomTab } from 'components';

function Groups(): JSX.Element {
  return (
    <Box flex={1} justifyContent="center" bg="#11161f" alignItems="center">
      <ScrollView width="100%" paddingBottom={3} py={5} px={6}>
        <Label color="white" sz="large" fontWeight="bold">
          Groups
        </Label>
      </ScrollView>
      <BottomTab />
    </Box>
  );
}

export default Groups;
