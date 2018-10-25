import Link from 'next/link'

const linkStyle = {
  marginRight: 25
  
}

const Header = () => (
    <div>
      <Link id="link1" href="/">
        <a id="a1" style={linkStyle}>Главная</a>
      </Link>
      <Link id="link2" href="/about">
        <a style={linkStyle}>Хобби</a>
      </Link>
      <style jsx>{`
        #a1 {
          margin-left:1.5%;
        }
      `}
      </style>
    </div>
)

export default Header