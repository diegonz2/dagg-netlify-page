import Head from 'next/head'
import Image from 'next/image' // Importamos el componente de Imagen
import Header from '@components/Header'

export default function Home() {
  
  // --- Define tu título y descripción aquí ---
  const pageTitle = "Página Personal de Diego";
  const pageDescription = "Ingeniero de Cloud Security @ Google. Conoce mis intereses y proyectos.";
  const siteUrl = "https://[tu-url-de-netlify].netlify.app"; // <-- ¡IMPORTANTE: Pon tu URL real aquí!
  const previewImage = "/dagg.jpg"; // Usará tu foto de perfil

  return (
    <div className="container">
      <Head>
        {/* --- Título Básico (para la pestaña del navegador) --- */}
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon_turtle.ico" />

        {/* --- Meta Tags Esenciales (para SEO y WhatsApp) --- */}
        <meta name="description" content={pageDescription} />
        
        {/* --- Open Graph (El estándar para Facebook, WhatsApp, etc.) --- */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={`${siteUrl}${previewImage}`} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />

        {/* --- Twitter Card (Para que se vea bien en Twitter) --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={`${siteUrl}${previewImage}`} />
      </Head>

      <main>
        {/* 1. Tu Imagen */}
        <Image 
          src="/dagg.jpg" 
          alt="Foto de Diego" 
          className="profile-image"
          width={250}
          height={250}
        />
        
        <Header title={
          <span className="main-title"> 
            I'm Diego, Cloud Security Engineer working @
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
        
        {/* 3. Las Secciones */}
        <div className="sections-list">
            {/* ... (tus secciones) ... */}
        </div>
      </main>

    </div>
  )
}