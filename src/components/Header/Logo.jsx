import { 
    Image
} from '@mantine/core';

import Todomax from '../../assets/todomax.png';

function Logo() {
  return (
    <>
        <Image h={30} w="auto" fit="contain" src={Todomax} visibleFrom="md"></Image>
    </>
  );
}

export default Logo;