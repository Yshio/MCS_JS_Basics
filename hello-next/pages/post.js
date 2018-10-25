import Layout from './comps/MyLayout.js'
import {withRouter} from 'next/router'
import Markdown from 'react-markdown'
import Format from './comps/Format.js';
let datab = "";
function Data(str) {

}

export default withRouter((props) => (
  <Format>
    <Layout>
      <h1>{props.router.query.title}</h1>
      <div className="markdown">
        <Markdown source={` Скоро...
        `}/>
      </div>
      <style jsx global>{`
        .markdown {
          font-family: 'Arial';
        }

        .markdown a {
          text-decoration: none;
          color: #000000;
        }

        .markdown a:hover {
          opacity: 0.6;
        }

        .markdown h3 {
          padding: 0;
          text-transform: uppercase;
        }
        `}</style>
      </Layout>
      </Format>
))