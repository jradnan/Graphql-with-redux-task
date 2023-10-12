import { useQuery } from "@apollo/client";
import { Get_Episodes } from "../../graphql/queries";
import { Episode } from "../../__generated__/graphql";
import EpisodeCard from "./EpisodeCard";
import DummyImages from '../../Data/DummyImages.json';
const Episodes = () => {
  const { loading, error, data } = useQuery(Get_Episodes);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  //   console.log(data.episodes.results);


  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
      {data?.episodes?.results?.map((episode, index) => (
        <EpisodeCard
          key={episode?.id}
          episode={episode as Episode}
          Image={DummyImages[index].image}
        ></EpisodeCard>
      ))}
    </div>
  );
};

export default Episodes;
