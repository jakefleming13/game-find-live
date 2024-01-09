import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageurl from "../services/image-url";

//Interface for filtering games by genre
interface Props{
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
    <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
    <List>
      {data?.results.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              objectFit='cover'
              src={getCroppedImageurl(genre.image_background)}
            />
            <Button
              whiteSpace='normal'
              textAlign='left'
              fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
              onClick={() => onSelectGenre(genre)}
              variant="link"
              fontSize="large"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};

export default GenreList;
