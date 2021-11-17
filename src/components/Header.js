import PropTypes from  'prop-types'

const Header = ({title}) => {
    return (
        <header class='header'>
            <h1>{title}</h1>
            <button>Add</button>
        </header>
    )
}

Header.defaultProps ={
    title: 'Task Tracker'
    }
    
    Header.propTypes ={
        title: PropTypes.string.isRequired
    }


    // **************HOW TO WRITE CSS IN REACT**********
    // const headingStyle = 
    //     color: 'red',
    //     backgroundColor: 'yellow',
    // 

export default Header
    