import Grid from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <Grid type="Grid" radius={12.5} color="#3f51b5" height={80} width={80} />
    </LoaderWrapper>
  );
};

export default Loader;
