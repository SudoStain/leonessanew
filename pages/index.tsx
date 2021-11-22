import Head from 'next/head'
import Image from 'next/image'

import { Layout } from '../components/common'
import LoginForm from "../components/LoginForm";
import Todo from "../components/Todo";
import Homer from "../components/Homer";
import { useUserContext } from "../contexts/UserContext";
import { Container, Text } from '../components/ui'

export default function Home() {

  const { user } = useUserContext();
  return (
    <>
      <Head>
        <title>Blank App</title>
     
      </Head>
      

  
        
      <Container>
      <section className="container mx-auto text-center py-6 mb-12">
      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center">
        Login Page
      </h1>
      <div className=" mb-4">
        <div className="h-1 mx-auto bg-white w-1/4  my-0 py-0 rounded-t">

        {!user ? <LoginForm /> : <Todo />}
        {user ? <Homer /> : <Todo/>}
        </div>
      </div>

  
   
    </section>
    </Container>
   </>

 
  )
}
Home.Layout = Layout