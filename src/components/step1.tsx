import * as React from "react";
import { Input, Flex, Text, Button } from "@fluentui/react-northstar";
import { SearchIcon } from "@fluentui/react-icons-northstar";

//import TreeTitle from "./tree";

export const Step1: React.FC = () => {
  return (
    <Flex column>
      <Text content="Configure Navigation" weight="bold" size="large" />
      <Text content="The Mega Menu can be configured here" size="small" />
      &nbsp;
      <Text content="Add Navigation entries" weight="bold" size="large" />
      <Text
        content="Here's an example of how a section can be used to group input"
        size="small"
      />
      &nbsp;
      <Flex gap="gap.small">
        <Button content="+ Add entry" primary />
        <Input
          icon={<SearchIcon />}
          placeholder="Search for a navigation tab"
        />
      </Flex>
      &nbsp;
      {/* <TreeTitle /> */}
    </Flex>
  );
};
