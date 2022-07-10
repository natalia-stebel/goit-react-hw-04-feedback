import PropTypes from 'prop-types';
import css from "./FeedbackOptions.module.css"

const feedBackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(key =>{
    return (<button 
      className={css.button}
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