import Header from '../header/Header'
import './PageWrapper.css'
import '../../App.css'
import Footad from '../Ads/AdCompo'

const PageWrapper = (props) => {
    return (
        <div className="pageWrapper flex-col container">
            <div className='main-content flex-col'>
                <Header />
                <div className='center'>
                    {props.children}
                </div>
                
      <div className='center'>
      <Footad />
      </div>
            </div>
      </div>
    )
}

export default PageWrapper
