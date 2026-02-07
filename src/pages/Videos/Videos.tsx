import { Prompt } from '../../components/terminal'
import { videos } from '../../data/videos'
import { formatDate } from '../../utils/formatDate'
import './Videos.css'

export default function Videos() {
  const featuredVideo = videos.find(v => v.featured)
  const otherVideos = videos.filter(v => !v.featured)

  return (
    <div className="videos">
      <header className="videos__header">
        <Prompt command="ls" args="./videos" />
      </header>

      {/* Featured Video */}
      {featuredVideo && (
        <section className="videos__featured">
          <h2 className="videos__section-title"># featured</h2>
          <div className="videos__featured-video">
            <div className="videos__embed-wrapper">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${featuredVideo.id}`}
                title={featuredVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="videos__featured-info">
              <h3 className="videos__featured-title">{featuredVideo.title}</h3>
              {featuredVideo.description && (
                <p className="videos__featured-description">{featuredVideo.description}</p>
              )}
              <time className="videos__featured-date">{formatDate(featuredVideo.date)}</time>
            </div>
          </div>
        </section>
      )}

      {/* All Videos */}
      <section className="videos__section">
        <h2 className="videos__section-title"># all videos</h2>
        <div className="videos__grid">
          {otherVideos.map((video, index) => (
            <div key={index} className="videos__card">
              <div className="videos__embed-wrapper">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="videos__card-info">
                <h3 className="videos__card-title">{video.title}</h3>
                <time className="videos__card-date">{formatDate(video.date)}</time>
              </div>
            </div>
          ))}
        </div>
      </section>

      {videos.length === 0 && (
        <p className="videos__empty">No videos yet. Check back soon!</p>
      )}
    </div>
  )
}
