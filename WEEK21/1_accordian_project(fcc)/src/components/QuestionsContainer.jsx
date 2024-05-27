const QuestionsContainer = (props) => {
  return (
    <div className="accordion accordion-main" id="accordionExample">
      {props.children}
    </div>
  );
};
export default QuestionsContainer;
