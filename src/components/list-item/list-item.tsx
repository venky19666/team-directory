import { Avatar, Container, Details, EmailId, Name } from "./list-item.styles";

interface ListItemProps {
  name: string;
  emailId: string;
  image: string;
}

export const ListItem = (props: ListItemProps) => {
  return (
    <Container>
      <Avatar src={props.image} alt={props.name} />
      <Details>
        <Name>{props.name}</Name>
        <EmailId>{props.emailId}</EmailId>
      </Details>
    </Container>
  );
};
