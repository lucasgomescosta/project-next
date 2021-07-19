import P from 'prop-types';
import { loadPages } from '../api/load-pages';
import Home from '../templates/Home';

export default function Page({ data }) {
  return <Home data={data} />
}

export const getStaticPaths = async () => {
  const paths = (await loadPages()).map((page) => {
    return {
      params: {
        slug: page.slug,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (ctx) => {
  let data = null;

  try {
    data = await loadPages(ctx.params.slug);
  } catch (error) {
    //
  }

  return {
    props: {
      data,
    },
  };
};

Page.propTypes = {
  data: P.object,
};