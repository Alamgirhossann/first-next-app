import Nav from "../../components/Nav";


export const getStaticPaths = async()=>{
    const res =await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
   const paths = data.map((curElem)=>{
      console.log(curElem);
      return{
        params:{
          id: curElem.id.toString()
        }
      }
    })
    return{
      paths,
      fallback:false
    }
  };
  
  export const getStaticProps = async(context)=>{
    const id = context.params.id;
    const res =await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return{
      props:{
        data
      }
    }
  };
const id = ({data}) => {
    return (
        <>
        <Nav/>
        <div style={{background:"blue", color:"white"}}>
      <h1>{data.id}</h1>
      <h4>{data.title}</h4>
      </div>
      </>
    );
};

export default id;