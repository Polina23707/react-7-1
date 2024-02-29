import DateTimePretty from "./DateTimePretty"

export interface VideoType {
  date: string,
  url: string,
}

export default function Video({date, url}: VideoType) {
  return (
      <div className="video">
          <iframe src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          <DateTimePretty date={date} />
      </div>
  )
}