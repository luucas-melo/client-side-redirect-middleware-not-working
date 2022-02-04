import type { NextPage } from 'next';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
const Public: NextPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <div>
      <h1>{session?.user?.name ? session?.user?.name + ' isLogged in' : 'User is not logged in'} </h1>
      {session && (
        <>
          <button style={{ backgroundColor: 'black', color: 'white' }} onClick={() => router.push('/protected')}>
            Protected page
          </button>
          <br/>
         
          <Link href="/protected">link to /protected-page</Link>
        </>
      )}
       <br/>
      <button
        onClick={() => {
          signIn('credentials', { redirect: false });
          router.push('/protected');
        }}
      >
        signin
      </button>
    </div>
  );
};

export default Public;
