import Head from 'next/head'
import Image from 'next/image' // Importamos el componente de Imagen
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Página Personal de Diego</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* 1. Tu Imagen */}
        {/* Next.js la tomará de la carpeta /public */}
        <Image 
          src="/diego.jpg" 
          alt="Foto de Diego" 
          className="profile-image"
          width={180}  // Ancho real de la imagen
          height={180} // Alto real de la imagen
        />

        {/* 2. Tu Título (ya lo tenías) */}
        <Header title="¡Soy Diego!" />

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
