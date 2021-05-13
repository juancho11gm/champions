import ListItem from '@material-ui/core/ListItem';

function ListItemLink (props) {
  return <ListItem button component="a" {...props} />;
}

export default function Person ({ person }) {
  return (
    <ListItemLink href={`/person/${person.id}`} as={`/person/${person.id}`}>
      {person.name}
    </ListItemLink>
  )
}
