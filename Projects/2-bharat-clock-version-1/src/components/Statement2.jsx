function Statement2() {
  let currentDate = new Date();
  return (
    <div className="text-center">
      <p>
        This is the current time: {currentDate.getDate()}/
        {currentDate.getMonth()}/{currentDate.getFullYear()} -{" "}
        {currentDate.getHours()}:{currentDate.getMinutes()}:
        {currentDate.getSeconds()} AM
      </p>
    </div>
  );
}

export default Statement2;
