import { Game } from '../hooks/usegames'
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import PlaformIconList from './PlaformIconList';
import CriticScore from './CriticScore';
import getCroppedImageurl from '../services/image-url';
import Emoji from './Emoji';

interface Props{
    game: Game;
}

const GameCard = ({game}: Props) => {
  return (
    <Card>
        <Image src={getCroppedImageurl(game.background_image)}/>
        <CardBody>
            

            <HStack justifyContent='space-between' marginBottom={3}>
                {/* This mapping is constructing an array of platform objects */}
                <PlaformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
                <CriticScore score={game.metacritic}/>
            </HStack>
            <Heading fontSize='2xl'>{game.name} <Emoji rating={game.rating_top}/> </Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard