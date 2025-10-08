const Title = (props) => {
  return (
    <p class="text-2xl md:text-3xl mb-5 font-bold text-white">
      {props.children}
    </p>
  );
};

export default Title;
