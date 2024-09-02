import { AppShell, Flex } from "@mantine/core";

import CardWithMenu from "./Main/CardWithMenu";

function TodomaxMain({ data }) {

  const Task = data.task.map((item, index) => (
    <CardWithMenu key={index} data={item}></CardWithMenu>
  ));

  return (
    <>
      <AppShell.Main>
        <Flex
          mih={50}
          gap="sm"
          justify="center"
          align="center"
          direction="row"
          wrap="wrap"
        >
          {Task}
        </Flex>
      </AppShell.Main>
    </>
  );
}

export default TodomaxMain;
