import Layout from './comps/MyLayout'
import Link from 'next/link'
import MyImage from './comps/MyImage';
import Format from './comps/Format';
import Text from './comps/Text';

function getPosts () {
  return [
    { id: 'based-nextjs', title: 'Основное'},
    { id: 'contacts-nextjs', title: 'Контакты'},
    { id: 'education-nextjs', title: 'Образование'},
  ]
}

const PostLink = ({ post }) => (
    <li>
      <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
        <a>{post.title}</a>
      </Link>
      <style jsx>{`

        li {
          list-style: none;
          margin-bottom:30%;
        }
  
        a {
          text-decoration: none;
          color: #000000;
          font-family: "Arial";
        }
  
        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </li>
)

export default () => (
  <Format>
    <Layout>
    <ul className="ull">
        {getPosts().map((post) => (
          <PostLink className="but" key={post.id} post={post}/>
          ))}
      </ul>
      <p id="myimg"><MyImage> <Text/></MyImage> </p>
      <style jsx>{`
        h1, a {
          font-family: "Arial";
        }
        .ull {
          float: left;
          margin-left: 3%;
          margin-top: 10%;
          
        }
        ul {
          padding: 0;
        }
        li {
          list-style: none;
        }
        #myimg{
          margin-left: 18%;
          margin-top: 5%;
        }
        #mytext {
          float: right;
          margin-right:30%
          
        }
        a {
          text-decoration: none;
          color: #000000;
        }
        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </Layout>
  </Format>
)