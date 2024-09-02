import { 
    AppShell, 
    Group
} from '@mantine/core';

import Logo from './Header/Logo';
import MobileBurger from './Header/MobileBurger';
import UserWithMenu from './Header/UserWithMenu';

function TodomaxHeader({mobileBurgerOpened, mobileBurgerToggle, data}) {
  return (
    <>
        <AppShell.Header p="md">

            <Group justify="space-between">

              <Logo></Logo>

              <Group h="100%" px="md">
                <MobileBurger burgerOpened={mobileBurgerOpened} burgerToggle={mobileBurgerToggle}></MobileBurger>
              </Group>

              <UserWithMenu data={data}></UserWithMenu>

            </Group>

        </AppShell.Header>
    </>
  );
}

export default TodomaxHeader;