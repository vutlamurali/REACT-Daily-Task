import { ThreeCircles } from 'react-loader-spinner'


const ThreeLoaders = () => {
  return (
    <ThreeCircles
      visible={true}
      height="100"
      width="100"
      //   color="#4fa94d"
      color="red"
      ariaLabel="three-circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};
export default ThreeLoaders;
