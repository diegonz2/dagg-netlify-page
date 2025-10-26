import Head from 'next/head'
import Image from 'next/image' // Importamos el componente de Imagen
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Welcome</title>
        <link rel="icon" href="/favicon_turtle.ico" />
      </Head>

      <main>
        {/* 1. Tu Imagen */}
        {/* Next.js la tomará de la carpeta /public */}
        <Image 
          src="/dagg.jpg" 
          alt="Foto de Diego" 
          className="profile-image"
          width={250}  // Ancho real de la imagen
          height={250} // Alto real de la imagen
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
                <h3>Interest</h3>
                <p>devops, linux, hacking, cloud, security, cybersecurity</p>
            </div>

            <div className="section">
                <h3>What I like to do</h3>
                <p>Sports, pickelball, boxing, etc</p>
            </div>

            <div className="section">
                <h3>Interesting stuff</h3>
                <p>article about devops</p>
            </div>

            <div className="section">
                <h3>This poll will be the best one you should do on your life.</h3>
            </div>

        </div>
      </main>

    </div>
  )
}
