import { useDispatch } from "react-redux";
import { Episode } from "../../__generated__/graphql";
import { addToWatchList,addToWatchedList } from "../../redux/WatchListSlice/WatchListSlice";
import Swal from "sweetalert2";

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
    // Dispatch the action to add to the watchlist
    dispatch(addToWatchList(episode));

    // Show a SweetAlert when added to the watchlist
    Swal.fire({
      icon: "success",
      title: "Added to Watch List",
      text: `You added ${episode.name} to your watch list.`,
    });
  }

  const handleAddToWatchedList = () => {
    // Dispatch the action to add to the watched list
    dispatch(addToWatchedList(episode));

    // Show a SweetAlert when added to the watched list
    Swal.fire({
      icon: "success",
      title: "Added to Watched List",
      text: `You added ${episode.name} to your watched list.`,
    });
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
