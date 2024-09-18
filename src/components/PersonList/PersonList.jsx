import { Person } from '../Person';

export const PersonList = ({ arrayPersons }) => {
  return (
    <ul>
      {arrayPersons.map((person) => (
        <Person key={person.id} person={person} />
      ))}
    </ul>
  );
};
