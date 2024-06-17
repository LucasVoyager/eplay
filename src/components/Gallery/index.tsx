import { useState } from 'react'

import { Action, Item, Itens, Modal, ModalContent } from './styles'

import Section from '../Section'

import hogwarts from '../../assets/images/fundoHogwarts.png'
import play from '../../assets/images/botao-play 1.png'
import zoom from '../../assets/images/mais-zoom 1.png'
import spiderman from '../../assets/images/Spiderman.png'
import close from '../../assets/images/close 1.png'

interface GalleryItem {
  type: 'img' | 'video'
  url: string
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const mock: GalleryItem[] = [
  {
    type: 'img',
    url: spiderman
  },
  {
    type: 'img',
    url: hogwarts
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
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'img',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'img') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'img') return zoom
    return play
  }

  const closeModal = () =>
    setModal({
      isVisible: false,
      type: 'img',
      url: ''
    })
  return (
    <>
      <Section title="Galeria" background="black">
        <Itens>
          {mock.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
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
      <Modal className={modal.isVisible ? 'visible' : ' '}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="botao fechar" onClick={() => closeModal()} />
          </header>
          {modal.type === 'img' ? (
            <img src={modal.url} alt="imagem jogo" />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </ModalContent>
        <div onClick={() => closeModal()} className="overlay"></div>
      </Modal>
    </>
  )
}

export default Gallery
