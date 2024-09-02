import { 
    Card,
    Text,
    Checkbox,
    Group,
    Badge
} from "@mantine/core";

function DifficultyConverter(number) {

    let easy = { difficulty: "easy", color: "green" };
    let normal =  { difficulty: "normal", color: "indigo" };
    let hard =  { difficulty: "hard", color: "red" };

    switch (number) {
        case 1:
            return easy;
        case 2:
            return normal;
        case 3: 
            return hard;
    }

}

function CardWithMenu({data}) {

    const TodoTask = data.todo.map((item, index) => (
        <Checkbox
            key={index}
            defaultChecked
            label={item.do}
            color={DifficultyConverter(item.difficulty).color}
            radius="xl"
            my="xs"
        />
    ));

  return (
    <>
        <Card 
            shadow="sm" 
            padding="lg" 
            radius="md" 
            component="a"
            withBorder
        >
            <Group justify="space-between" mb="sm">
                <Text fw={500}>{data.title}</Text>
                <Badge color={DifficultyConverter(data.difficulty).color}>{DifficultyConverter(data.difficulty).difficulty}</Badge>
            </Group>
            {TodoTask}
        </Card>
    </>
  );
}

export default CardWithMenu;