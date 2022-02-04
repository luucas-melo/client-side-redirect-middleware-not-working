import type { NextPage } from 'next'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
const Protected: NextPage = () => {
  const {data:session} = useSession()
  const router = useRouter()
  return (
    <div>
   <h1>{session?.user?.name} is logged in</h1>
   <button
        onClick={() => {
          signOut();
          router.push('/');
        }}
      >
        signout
      </button>
   </div>
  )
}

export default Protected
