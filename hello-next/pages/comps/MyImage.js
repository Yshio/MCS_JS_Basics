import Link from 'next/link'


const MyImage = (props) => (
    <p>
      <img src="https://scontent-sin2-1.cdninstagram.com/vp/3b213eb8770741fff7f3bf4eef6d969e/5C5023A6/t51.2885-15/e35/41256992_1866563886795841_7546477002607373294_n.jpg" id="myimg"/> 
      <h2 id="txt">{props.children} </h2>
      <style jsx>{`
        #myimg {
            border-radius: 100%;
            border: 8px solid black;
            box-shadow: 0 0 7px #666;
            width: 20%;
            height:20%;
            pointer-events: none;
            -moz-user-select: none;
            -webkit-user-select: none; 
            -ms-user-select: none; 
            user-select: none; 
        }
        #txt {
          float: right;
          margin-right: 20%;
          margin-top: -3%;
        }
      `}
      </style>
    </p>
)

export default MyImage