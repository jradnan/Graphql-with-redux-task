import { RootState } from "../../redux/app/store";
import { useSelector } from "react-redux";
const Watched = () => {
    const { watched } = useSelector((state: RootState) => state.watched);
    console.log(watched);
    return (
        <div>
             {watched.map((_item, index) => (
          <li key={index}>Episode: {_item.name} Date: {_item.air_date}</li>
          ))}
        </div>
    );
};

export default Watched;