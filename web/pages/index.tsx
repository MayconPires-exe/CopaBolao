//tipagem
interface HomeProps {
  count: number;
}

//component
export default function Home(props: HomeProps) {
  return (
    <h1>Contagem: {props.count}</h1>
  )
}

export const getServerSideProps = async () => {
  //renderização pelo lado do server side rendering
  const response = await fetch('http://localhost:3333/pools/count')
  const data = await response.json()

  //retorno das informações do usuário
  return {
    props: {
      count: data.count,
    }
  }
}