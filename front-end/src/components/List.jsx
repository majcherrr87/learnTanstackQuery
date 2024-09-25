import { useQuery } from "@tanstack/react-query";
import { peopleQueryOptions } from "../queries/peopleQueryOptions";
import "./List.css";

export const List = ({ onPersonSelect }) => {
  const { data: people, isPending, isError } = useQuery(peopleQueryOptions);

  if (isPending) {
    return <p>Ładowanie</p>;
  }

  if (isError) {
    return <p>Błąd</p>;
  }

  return (
    <ul>
      {people?.map((person) => (
        <li key={person.id} onClick={() => onPersonSelect(person.id)}>
          {person.name}
        </li>
      ))}
    </ul>
  );
};
