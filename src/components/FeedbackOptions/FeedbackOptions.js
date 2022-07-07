import PropTypes from 'prop-types';

const feedBackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option =>{
    return (<button 
        key={option} 
        type="button"
        onClick={()=>onLeaveFeedback(key)}>
         {key}
         </button>)})

  }

  
    
  


feedBackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default feedBackOptions;