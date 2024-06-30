import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import 'react-h5-audio-player/lib/styles.css';

const PlaylistComponent = () => {
  const {  } = useActions();
  const { allUsers, user } = useTypedSelector((state) => state.UserReducer);
  return (
    <div>
      
    </div>
  );
};

export default PlaylistComponent;
