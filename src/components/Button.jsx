const Button = ({ label }) => {
  return (
    <button type='submit' className='btn'>
      {label}
    </button>
  );
};

Button.defaultProps = {
  label: 'Submit',
};

export default Button;
