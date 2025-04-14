import Header from './header.jsx';
import Footer from './Footer.jsx';
// import PropTypes from 'prop-types';

function Stuff({name = "The Employee", title = "The Worker"}){

    return(
        <div className="myCard">
            <img className="cardPic" src="https://placehold.co/150x150"></img>
            <h3>{name}</h3>
            <p>{title}</p>
        </div>
    );
}

export default Stuff