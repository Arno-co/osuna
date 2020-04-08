import React from 'react';
import GreetingContainer from './GreetingContainer';
import { openModal } from '../actions/modal_actions';
import { clearErrors } from './../actions/session_actions';
import { connect } from 'react-redux';

function Splash({openModal}) {
    return(
        
      <div className='splash'>
            <GreetingContainer />
            <div className='main-splash'>
                {/* <img className="logo-splash" src={window.logoURL}/> */}
                <h2 className='title-splash'>Make more time for the work that matters most</h2>

                <p className='text-splash'>OSUNA is the work management platform teams use to stay focused on the goals, projects, and daily tasks that grow your business.</p>
                <div className='signup-splash'>
                    {/* <input className="splash-signup-input" type="text" placeholder="   yourname@yourcompany.com" /> */}
                    <button className='splash-button' onClick={() => openModal('signup')}>GET STARTED</button>
                </div>
                <img className='splash-meeting' src={window.team_meetingURL} />
            </div>
      </div>
    )
}


const mapStateToProps = state => ({
    modal: state.ui.modal,
    errors: state.errors.session
})
const mapDispatchToProps = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(Splash);