import imgHome from "../../../public/img/home-img.png"

function Home() {
  return (
    <section>
      <div>
          <h1>Tagua y Semillas</h1>
          <p>Dedicados al procesamiento
de semillas y cortezas naturales para la elaboración de
bisutería artesanal y ecológica. </p>
          <button>Conócenos</button>
      </div>
      <div>
        <img src={imgHome} alt=""/>
      </div>

    </section>
  )
}

export default Home