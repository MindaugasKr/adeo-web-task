import React from 'react';
import { connect } from 'react-redux';

import { fetchData } from '../../../redux/actions';

import ContentContainer from '../../containers/content';
import './about-mini.scss';

class AboutMini extends React.Component {
  
  componentDidMount() {
    // Load some data from JSON placeholder API.
    this.props.fetchData();
  }

  render() {
    return (
      <div className='about-mini  theme-blue-white'>
        <ContentContainer additionalCSS='about-mini__content'>

          <div className='about-mini__block-1'>
            <h3 className='about-mini__title' >WEB DEVELOMPENT</h3>
            <p className='about-mini__p' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum porro sequi in sapiente quod ex similique nesciunt? Quod, quisquam minima.</p>
            <p className='about-mini__p' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum porro sequi in sapiente quod ex similique nesciunt? Quod, quisquam minima.</p>
          </div>

          <div className='about-mini__block-2'>
            <h3 className='about-mini__title' >WIREFRAME</h3>
            <p className='about-mini__p' >Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
          </div>

          <div className='about-mini__block-3'>
            <div className='about-mini__block-3-content'>
              <h3 className='about-mini__title' >Custom List</h3>
              <h3 className='about-mini__title  about-mini__title--slim'>Some heading</h3>
              {this.props.data.length ?
                <>
                  <i>{this.props.data[0].title}</i>
                  <hr />
                  <i>{this.props.data[1].title}</i>
                  <hr />
                  <i>{this.props.data[2].title}</i>
                  <hr />
                  <i>{this.props.data[3].title}</i>
                </> :
                <span>Loading...</span> 
              }
            </div>
            <div className='about-mini__block-3-content'>
              <h3 className='about-mini__title' >Web Development</h3>
              <p className='about-mini__p' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam autem modi mollitia suscipit quaerat at facere nemo explicabo a inventore.</p>
            </div>
          </div>

        </ContentContainer>
      </div>
    );
  }
} 

const mapStateToProps = state => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps, { fetchData })(AboutMini);