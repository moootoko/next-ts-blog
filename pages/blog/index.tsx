// import { GetServerSideProps } from 'next';
// import { NextRouter, useRouter } from 'next/dist/client/router';
// import Link from 'next/head';
// import Head from 'next/head';
// import BaseLayout from '../../components/baselayout';
// import * as fs from 'fs';
// import * as matter from 'gray-matter';
// import { Dropbox } from 'dropbox';

const Blog = () => {
  // const router: NextRouter = useRouter();
  // const genre: string | null = router.query.genre;

  return <h2>This is Blog Page.</h2>
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   const prompt = require('prompt');
//   prompt.start();

//   prompt.get({
//     properties: {
//       accessTokec: {
//         description: ''
//       },
//     },
//   }, (error: any, result: any) => {
//     const dbx = new Dropbox({ accessToken: result.accessToken });
//     dbx.filesListFolder({ path: '' })
//       .then((response: any) => {
//         console.log('response: ', response);
//       })
//       .catch((err: any) => {
//         console.log('err: ', err);
//       });
//   });

//   return {
//     props: {}
//   };
// }

export default Blog;