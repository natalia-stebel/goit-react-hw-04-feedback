import PropTypes from 'prop-types';

const feedBackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(key =>{
    return (<button 
        key={key}
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