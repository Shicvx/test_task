import * as React from "react";
import { Flex, Text } from "@fluentui/react-northstar";
import { Step1 } from "./step1";

const lists = [
  {
    id: 0,
    title: "Step1",
  },
  {
    id: 1,
    title: "Step2",
  },
  {
    id: 2,
    title: "Step3",
  },
];

const CardExample = () => (
  <div
    style={{
      margin: "15px 20px",
      boxShadow: "rgba(34, 36, 38, 0.15) 1px 1px 1px 3px",
    }}
  >
    <div style={{ padding: "10px 20px" }}>
      <Flex gap="gap.small">
        <Flex column>
          <Text content="Settings" weight="bold" size="larger" />
          <h3>Settings</h3>
          <ul>
            {lists.map((list) => (
              <li
                key={list.id}
                style={{
                  width: "10em",
                  padding: "2px",
                  margin: "0",
                }}
              >
                {list.title}
              </li>
            ))}
          </ul>
        </Flex>
        <Step1 />
      </Flex>
    </div>
  </div>
);

const Setting = () => (
  <div>
    <CardExample />
  </div>
);

export default Setting;

// <Flex space="between">
//       <Flex gap="gap.small">
//         <Button content="Discard" />
//         <Button content="Save" primary />
//       </Flex>
//     </Flex>
