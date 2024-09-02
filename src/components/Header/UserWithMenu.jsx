import { 
    Menu,
    Group, 
    Avatar,
    Text,
    Button
} from "@mantine/core";

import { 
    IconChevronDown, 
    IconUser,
    IconSettings,
    IconLogout
} from '@tabler/icons-react';

import AvatarImage from '../../assets/image.jpg';

function UserWithMenu({data}) {
  return (
    <>
        <Menu 
            position="bottom-start"
            offset={20}
            width={150}
            withArrow
            arrowPosition="center"
        >

            <Menu.Target>
                <Button variant="transparent" color="rgba(0, 0, 0, 1)" > 
                    <Group gap={7}>
                    <Avatar src={AvatarImage} radius="xl" size={20} />
                        <Text fw={500} size="sm" lh={1} mr={3}>
                            {`${data.firstname} ${data.lastname}`}
                        </Text>
                    <IconChevronDown style={{ width: 12, height: 12 }} stroke={1.5} />
                    </Group>
                </Button>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Item leftSection={<IconUser style={{ width: 16, height: 16 }} stroke={1.5} ></IconUser>}>
                    Account
                </Menu.Item>
                <Menu.Item leftSection={<IconSettings style={{ width: 16, height: 16 }} stroke={1.5} ></IconSettings>}>
                    Settings
                </Menu.Item>
                <Menu.Divider></Menu.Divider>
                <Menu.Item 
                    color="red"
                    leftSection={<IconLogout style={{ width: 16, height: 16 }} stroke={1.5}></IconLogout>}>
                        Logout
                </Menu.Item>
            </Menu.Dropdown>

        </Menu>
    </>
  );
}

export default UserWithMenu;