import { Action, Item, Itens, Modal, ModalContent } from './styles'

import Section from '../Section'

import magica from '../../assets/images/magica.png'
import play from '../../assets/images/botao-play 1.png'
import zoom from '../../assets/images/mais-zoom 1.png'
import spiderman from '../../assets/images/Spiderman.png'
import close from '../../assets/images/close 1.png'

type GalleryItem = {
  type: 'img' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'img',
    url: magica
  },
  {
    type: 'img',
    url: magica
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/1O6Qstncpnc?si=d-zRqIXYW3bwQGSH'
  }
]

type Props = {
  defaultCover: string
  name: string
}

const Gallery = ({ defaultCover, name }: Props) => {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'img') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'img') return zoom
    return play
  }
  return (
    <>
      <Section title="Galeria" background="black">
        <Itens>
          {mock.map((media, index) => (
            <Item key={media.url}>
              <img
                src={getMediaCover(media)}
                alt={`midia 1 ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="clique para aumentar a midia"
                />
              </Action>
            </Item>
          ))}
        </Itens>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="botao fechar" />
          </header>
          <img src={spiderman} alt="imagem jogo" />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Gallery
