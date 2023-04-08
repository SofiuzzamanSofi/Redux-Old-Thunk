import { useSelector } from 'react-redux'
import ContentCard from './ContentCard';

function Contents({ short }) {

    let contents = useSelector(state => state.contents.contents)
    // console.log("short:", short);

    // let contents;
    // if (short) {
    //     if (short === "Latest") {
    //         console.log(short)
    //         // function sortByDateTimeAscending(arr) {
    //         //     arr.sort(function (a, b) {
    //         //         var dateA = new Date(a.dateAndTime), timeA = new Date(a.dateAndTime),
    //         //             dateB = new Date(b.dateAndTime), timeB = new Date(b.dateAndTime);
    //         //         var dateTimeA = new Date(dateA.getFullYear(), dateA.getMonth(), dateA.getDate(),
    //         //             timeA.getHours(), timeA.getMinutes(), timeA.getSeconds());
    //         //         var dateTimeB = new Date(dateB.getFullYear(), dateB.getMonth(), dateB.getDate(),
    //         //             timeB.getHours(), timeB.getMinutes(), timeB.getSeconds());
    //         //         // return dateTimeA - dateTimeB;
    //         //         // return dateTimeB - dateTimeA;
    //         //         // return a.dateAndTime - b.dateAndTime;
    //         //         return b._id - a._id;
    //         //     });
    //         //     return arr;
    //         // };
    //         // const a = sortByDateTimeAscending(contents);
    //         // console.log("contents: first:", contents)
    //         // console.log("contents: second:", a)
    //         contents = contentss?.reverse()
    //     }
    //     else if (short === "Oldest") {
    //         contents = contentss
    //         // console.log(short)
    //     }
    //     else {
    //         contents = contentss
    //         // console.log(short)
    //     }
    // } else {
    //     contents = contentss
    // }

    if (short) {
        contents.reverse();
    }

    return (
        <div>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 pb-10'>
                {contents?.length && contents.map((content, i) => < ContentCard key={i} content={content} />)}
            </div>
        </div>
    )
}

export default Contents