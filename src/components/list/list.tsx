import { ListItem } from "../list-item/list-item";
import {
  Container,
  ListContainer,
  ListHeader,
  NotFoundMessages,
} from "./list.styles";
import { Member } from "../../App";

interface ListProps {
  headerMessage: string;
  items?: Member[] | null;
}

export const List = (props: ListProps) => {
  return (
    <Container>
      <ListHeader>{props.headerMessage}</ListHeader>
      <ListContainer>
        {props.items ? (
          props.items.map((member) => (
            <ListItem
              key={member.email}
              name={member.first_name}
              emailId={member.email}
              image={member.img}
            />
          ))
        ) : (
          <NotFoundMessages>No {props.headerMessage}</NotFoundMessages>
        )}
      </ListContainer>
    </Container>
  );
};
