import { RootState } from "../../redux/app/store";
import { useSelector } from "react-redux";

const Watchlist = () => {
  const { watchList } = useSelector((state: RootState) => state.watchList);
  return (
    <div>
      {watchList.map((_item, index) => (
          <li key={index}>Episode: {_item.name} Date: {_item.air_date}</li>
          ))}
          
    </div>
  );
};

export default Watchlist;
