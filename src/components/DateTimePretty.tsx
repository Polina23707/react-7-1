import DateTime from "./DateTime";
import moment from 'moment';

export default function DateTimePretty(props: any) {
  let time = moment(props.date, "YYYY-MM-DD hh:mm:ss").fromNow(true);

  if (time.includes('secon') || time.includes('minut')) {
    return <DateTime date={'12 минут назад'} />

  } else if (time.includes('hour')) {
    return <DateTime date={'5 часов назад'} />

  } else {

    if (time === 'a day') {
      return <DateTime date={'1 дней назад'} />
    } else {
      return <DateTime date={`${time.split(' ', 1)[0]} дней назад`} />
    }
  }    
}