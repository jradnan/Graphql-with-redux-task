import { useDispatch } from "react-redux";
import { Episode } from "../../__generated__/graphql";
import { addToWatchList,addToWatchedList } from "../../redux/WatchListSlice/WatchListSlice";

const EpisodeCard = ({
  episode,
  Image,
}: {
  episode: Episode;
  Image: string;
}) => {
  console.log(episode);
  const dispatch = useDispatch();

  const handleAddToWatch = () => {
    dispatch(addToWatchList(episode));
  }
  const handleAddToWatchedList = () => {
    dispatch(addToWatchedList(episode));
  }

  return (
    <div>
      <div className="card w-96 bg-teal-600 text-primary-content">
        <div>
          <img src={Image} alt="movie image" className="h-96 w-full" />
        </div>
        <div className="card-body p-5">
          <h2 className="card-title">{episode?.name}</h2>
          <p>Release: {episode?.air_date}</p>
          <div className="flex gap-2 mt-2">
            <button className="btn" onClick={handleAddToWatch}>Watch List</button>

            <button className="btn" >Watching</button>

            <button className="btn" onClick={handleAddToWatchedList}>Watched</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;
