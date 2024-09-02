import { 
    AppShell
} from '@mantine/core';

import ControlCard from './Navbar/ControlCard';

function TodomaxNavbar() {
  return (
    <>
        <AppShell.Navbar p="md">
           <ControlCard color="green"></ControlCard>
           <ControlCard color="indigo"></ControlCard>
           <ControlCard color="red"></ControlCard>
        </AppShell.Navbar>
    </>
  );
}

export default TodomaxNavbar;