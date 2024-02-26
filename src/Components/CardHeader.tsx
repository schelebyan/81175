import { styled } from 'goober';

interface Props {
  title: string;
  subtitle: string;
  tag: string;
}

const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled("h1")`
  color: var(--theme-card-accent-color);
  font-size: 21px;
  font-weight: 800;
  margin: 0;
  padding: 0;
  align-self: center;
`;
const Subtitle = styled("h2")`
  font-size: 13px;
  font-weight: 600;
  margin: 4px 0 0 0;
  padding: 0;
`;
const Tag = styled("p")`
  font-size: 12px;
  font-weight: 00;
  margin: 0;
  padding: 0;
  align-self: center;
`;

export default function CardHeader({ title, subtitle, tag }: Props): JSX.Element {
  return (
    <>
      <Container>
        <Title>{title}</Title>
        <Tag>{tag}</Tag>
      </Container>
      <Subtitle>{subtitle}</Subtitle>
    </>
  );
}
