import { 
    Burger
} from '@mantine/core';

function MobileBurger({burgerOpened, burgerToggle}) {
  return (
    <>
        <Burger opened={burgerOpened} onClick={burgerToggle} hiddenFrom="sm" size="sm" />
    </>
  );
}

export default MobileBurger;