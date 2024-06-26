import { useState } from 'react'

import { Action, Item, Itens, Modal, ModalContent } from './styles'
import { GalleryItem } from '../../pages/Home'

import Section from '../Section'

import play from '../../assets/images/botao-play 1.png'
import zoom from '../../assets/images/mais-zoom 1.png'
import close from '../../assets/images/close 1.png'

interface ModalState extends GalleryItem {
  isVisible: boolean
}

type Props = {
  defaultCover: string
  name: string
  itens: GalleryItem[]
}

const Gallery = ({ defaultCover, name, itens }: Props) => {
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
          {itens.map((media, index) => (
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
