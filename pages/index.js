import Head from 'next/head'
import Image from 'next/image' // Importamos el componente de Imagen
import Header from '@components/Header'

export default function Home() {

  // --- Define tu título y descripción aquí ---
  const pageTitle = "Diego's Webpage";
  const pageDescription = "Ingeniero de Cloud Security @ Google.";

  // =================================================================
  // === ¡¡¡CAMBIA ESTA LÍNEA POR TU URL REAL DE NETLIFY!!! ===
  // =================================================================
  const siteUrl = "https://diegonz.netlify.app";
  // =================================================================

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
          width={200}
          height={200}
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

          <div className="section">
            <h3>Topics I'm interested in 🔐</h3>
            <p>DevOps, Linux, Hacking, Cloud Computing, Security, Cybersecurity, Cyberspionage, IaC.</p>
          </div>

          <div className="section">
            <h3>What I like to do 🏆</h3>
            <p>Football/Soccer, Boxing, Volleyball, Pickleball, Inline skating.</p>
          </div>

          <div className="section">
            <h3>What resonates with me 💓</h3>
            <p>
              <a href="https://cloud.google.com/solutions/shifting-left-on-security" target="_blank" rel="noopener noreferrer">
                Shifting left on Security
              </a>
              
              {' & '}
              <a href="https://cloud.google.com/blog/topics/inside-google-cloud/meet-the-people-of-google-cloud-meet-kelsey" target="_blank" rel="noopener noreferrer">
                Why empathy is important in Technology.
              </a>
            </p>
          </div>

          <div className="section">
            <a href="https://forms.gle/DmaKkF34bWHZKHfh9" target="_blank" rel="noopener noreferrer">
            <h3>This is the best poll you will ever participate in 📊</h3>
            </a>
          </div>

        </div>
      </main>

    </div>
  )
}