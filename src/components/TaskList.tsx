import item from "../models/item";

interface TaskListProp {
  items: item[];
}
export default function TaskList({ items }: TaskListProp) {
  return (
    <div>
      <div className="text-2xl font-bold">Todo lists</div>
      {items.map((el) => (
        <div className="before:content-['-']" key={el.id}>
          {el.name}
          <input type="checkbox" />
        </div>
      ))}
    </div>
  );
}
