import { useQuery } from "@tanstack/react-query";
import { peopleQueryOptions } from "../queries/peopleQueryOptions";
import "./Header.css";

export function Header() {
  const { data } = useQuery(peopleQueryOptions);
  return (
    <header>
      <h1>Lista osób {data && data.length}</h1>
    </header>
  );
}
