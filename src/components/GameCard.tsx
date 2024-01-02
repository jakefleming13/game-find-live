import { Game } from '../hooks/usegames'
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import PlaformIconList from './PlaformIconList';
import CriticScore from './CriticScore';
import getCroppedImageurl from '../services/image-url';

interface Props{
    game: Game;
}

const GameCard = ({game}: Props) => {
  return (
    <Card>
        <Image src={getCroppedImageurl(game.background_image)}/>
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>

            <HStack justifyContent='space-between'>
                {/* This mapping is constructing an array of platform objects */}
                <PlaformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
                <CriticScore score={game.metacritic}/>
            </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCard