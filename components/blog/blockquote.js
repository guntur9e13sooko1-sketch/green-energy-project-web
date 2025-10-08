const Blockquote = (props) => {
  return (
    <blockquote class="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
      {props.children}
    </blockquote>
  );
};

export default Blockquote;
