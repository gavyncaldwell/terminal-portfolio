import { useState } from 'react'
import { Prompt } from '../../components/terminal'
import { SEO } from '../../components/seo'
import { galleryImages, GalleryImage } from '../../data/gallery'
import './Gallery.css'

type Category = 'all' | 'setup' | 'coffee' | 'life'

export default function Gallery() {
  const [filter, setFilter] = useState<Category>('all')
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const filteredImages =
    filter === 'all' ? galleryImages : galleryImages.filter(img => img.category === filter)

  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'all' },
    { value: 'setup', label: 'setup' },
    { value: 'coffee', label: 'coffee' },
    { value: 'life', label: 'life' },
  ]

  const getItemClass = (image: GalleryImage) => {
    const classes = ['gallery__item']
    if (image.size) {
      classes.push(`gallery__item--${image.size}`)
    }
    return classes.join(' ')
  }

  return (
    <div className="gallery">
      <SEO
        title="Gallery"
        canonical="/gallery"
        description="Photos of Gavyn Caldwell's desk setup, coffee station, and life moments."
      />

      <header className="gallery__header">
        <Prompt command="ls" args="./photos" />
      </header>

      <div className="gallery__filters">
        {categories.map(cat => (
          <button
            key={cat.value}
            className={`gallery__filter ${filter === cat.value ? 'gallery__filter--active' : ''}`}
            onClick={() => setFilter(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="gallery__grid-wrapper">
        <div className="gallery__grid">
          {filteredImages.map((image, index) => (
            <button
              key={index}
              className={getItemClass(image)}
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              {image.caption && <span className="gallery__item-caption">{image.caption}</span>}
            </button>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="gallery__lightbox" onClick={() => setSelectedImage(null)}>
          <div className="gallery__lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="gallery__lightbox-close" onClick={() => setSelectedImage(null)}>
              ×
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            {selectedImage.caption && (
              <p className="gallery__lightbox-caption">{selectedImage.caption}</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
