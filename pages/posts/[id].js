/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import Head from 'next/head'
import utilStyles from '../../utils.module.css'

export async function getStaticProps ({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths () {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default function Post ({ postData }) {
  return (
        <Layout>
            <Head>
            <title>{postData.title}</title>
            </Head>
            <article>
            <h1 className={utilStyles.headingXl}> {postData.title}</h1>
            <div className={utilStyles.lightText}>
            {postData.id}
            <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
  )
}
