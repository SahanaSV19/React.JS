function ErrorMessage(props) {
  // console.log(props.foodItems.length);

  return <>{props.foodItems.length === 0 && <h3>I am still hungry</h3>}</>;
  /* This statement is used so rather than hiding and unhiding using if else condition and making the DOM structure big and making the browser more time to load , this is the best way to reduce the DOM structure without affecti9ng the functionality , benifits- "enhances user experience", "reduces unnecessary rendering","makes apps more interactive and responsive" */
}

export default ErrorMessage;
