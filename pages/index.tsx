import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
const Home: NextPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <div>
      <h1>Login</h1>
      <h1>
        {session?.user?.name
          ? session?.user?.name + ' isLogged in'
          : 'User is not logged in'}{' '}
      </h1>
      <h3>click in the button</h3>
      <button
        style={{ backgroundColor: 'black', color: 'white' }}
        onClick={() => router.push('/protected')}
      >
        Protected page
      </button>
    </div>
  );
};

export default Home;
