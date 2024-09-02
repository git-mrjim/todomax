import { 
    ActionIcon,
    Grid, 
    Paper
} from '@mantine/core';

import { 
  IconPlus 
} from '@tabler/icons-react';

function ControlCard({color}) {
  return (
    <>
        <Paper bg={`${color}.1`} shadow="sm" my="sm">
            <Grid gutter="xs" justify="center" align="center" m="sm">
              <Grid.Col span="content" m="sm">
                <ActionIcon variant="filled" color={color} size="lg" aria-label="Settings">
                  <IconPlus style={{ width: '70%', height: '70%' }} stroke={1.5} />
                </ActionIcon>
              </Grid.Col>
              <Grid.Col span="content" m="sm">
                <ActionIcon variant="filled" color={color} size="lg" aria-label="Settings">
                  <IconPlus style={{ width: '70%', height: '70%' }} stroke={1.5} />
                </ActionIcon>
              </Grid.Col>
              <Grid.Col span="content" m="sm">
                <ActionIcon variant="filled" color={color} size="lg" aria-label="Settings">
                  <IconPlus style={{ width: '70%', height: '70%' }} stroke={1.5} />
                </ActionIcon>
              </Grid.Col>
              <Grid.Col span="content" m="sm">
                <ActionIcon variant="filled" color={color} size="lg" aria-label="Settings">
                  <IconPlus style={{ width: '70%', height: '70%' }} stroke={1.5} />
                </ActionIcon>
              </Grid.Col>
              <Grid.Col span="content" m="sm">
                <ActionIcon variant="filled" color={color} size="lg" aria-label="Settings">
                  <IconPlus style={{ width: '70%', height: '70%' }} stroke={1.5} />
                </ActionIcon>
              </Grid.Col>
              <Grid.Col span="content" m="sm">
                <ActionIcon variant="filled" color={color} size="lg" aria-label="Settings">
                  <IconPlus style={{ width: '70%', height: '70%' }} stroke={1.5} />
                </ActionIcon>
              </Grid.Col>
            </Grid>
        </Paper>
    </>
  );
}

export default ControlCard;