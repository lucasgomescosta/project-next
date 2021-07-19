/* eslint-disable prettier/prettier */
import P from 'prop-types';
import Home from '../templates/Home';
import { loadPages } from '../api/load-pages';

export default function Index({ data = null }) {
  return <Home data={data} />
}

Index.propTypes = {
  data: P.array,
}

export const getStaticProps = async () => {
  let data;
  try {
    data = await loadPages('landing-page');
  } catch (error) {
    //
  }

  if (!data || !data.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  }
}