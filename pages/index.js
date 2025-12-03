import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '@components/Header'
import { content } from '../data/content'
import InteractiveBackground from '@components/InteractiveBackground'

export default function Home() {
  const { meta, profile, header, sections } = content;
  const [currentImage, setCurrentImage] = useState(profile.image);

  return (
    <div className="container">
      <InteractiveBackground />
      <Head>
        <title>{meta.title}</title>
        <link rel="icon" href={meta.favicon} />
        <link rel="manifest" href="/manifest.json" />

        {/* --- SEO & Essentials --- */}
        <meta name="description" content={meta.description} />

        {/* --- Open Graph (WhatsApp, Facebook, etc.) --- */}
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={`${meta.siteUrl}${meta.previewImage}`} />
        <meta property="og:url" content={meta.siteUrl} />
        <meta property="og:type" content="website" />

        {/* --- Twitter Card --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={`${meta.siteUrl}${meta.previewImage}`} />
      </Head>

      <main>
        {/* --- Profile Image --- */}
        <Image
          src={currentImage}
          alt={profile.alt}
          className="profile-image"
          width={200}
          height={200}
          priority
          onMouseDown={() => setCurrentImage('/dagg-nose.jpg')}
          onMouseUp={() => setCurrentImage(profile.image)}
          onMouseLeave={() => setCurrentImage(profile.image)}
          onTouchStart={() => setCurrentImage('/dagg-nose.jpg')}
          onTouchEnd={() => setCurrentImage(profile.image)}
        />

        {/* --- Main Title (with Google colors) --- */}
        <Header title={
          <span className="main-title">
            {header.titlePrefix}
            <span className="google-logo">
              <span className="g-blue">G</span>
              <span className="g-red">o</span>
              <span className="g-yellow">o</span>
              <span className="g-blue">g</span>
              <span className="g-green">l</span>
              <span className="g-red">e</span>
            </span>
          </span>
        } />

        {/* --- Sections List --- */}
        <div className="sections-list">
          {sections.map((section, index) => (
            <div className="section" key={index}>
              <h3>{section.title}</h3>
              <p>
                {section.content && section.content}
                {section.links && section.links.map((link, i) => (
                  <span key={i}>
                    {link.prefix}
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.text}
                    </a>
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}