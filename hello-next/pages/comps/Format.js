import Upblock from './Upblock'

const Format = (props) => (
    <div>
        <Upblock/>
        <div className="backg">
            {props.children} 
        </div>
        <style jsx>{`
          .backg {
            width: 100%;
            height: 1000px;
          }
        `}
        </style>
    </div>
    )

export default Format
//background: url(https://avatanplus.com/files/resources/original/589706ea375a015a0df302f3.jpg);