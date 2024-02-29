import moment from 'moment';
import React, {useState} from 'react';

function DateTime(props: any) {
    return (
        <p className="date">{props.date}</p>
    )
}

function DateTimePretty(props: any) {
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


function Video(props: any) {
    return (
        <div className="video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <DateTimePretty date={props.date} />
        </div>
    )
}

function VideoList({...props}) {
    return props.list.map(item => <Video url={item.url} date={item.date} key={item.url}/>);
}

export default function App() {
    const [list, setList] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2024-02-29 13:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2024-02-29 16:30:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-02-03 23:16:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-01 16:17:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-12-02 05:24:00'
        },
    ]);

    return (
        <VideoList list={list} />
    );
}