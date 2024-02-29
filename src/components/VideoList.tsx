import Video from "./Video";
import { VideoType } from "./Video";

interface VideoListType {
  list: VideoType[],
}


export default function VideoList({...props}: VideoListType) {
  return props.list.map(item => <Video url={item.url} date={item.date} key={item.url}/>);
}