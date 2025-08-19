'use client'
import Layout from '@/app/layout';


import { useRouter } from 'next/router';

const Profile = () => {
  const router = useRouter();
  const { username } = router.query;

  return (
    <Layout>
      <h2>Profile Page</h2>
      <p>Welcome, {username}!</p>
    </Layout>
  );
};

export default Profile;
