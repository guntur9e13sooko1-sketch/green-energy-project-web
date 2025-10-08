const Section = (props) => {
  return (
    <div className="flex flex-wrap justify-between pt-12 -mx-6">
      {props.children}
    </div>
  );
};

export default Section;
