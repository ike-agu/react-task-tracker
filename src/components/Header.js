import PropTypes from  'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color = {showAdd? 'green' : 'red' } text= {showAdd ? 'close' : 'Add task'} onClick = {onAdd} />
               
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
      