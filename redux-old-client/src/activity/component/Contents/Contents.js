import { useSelector } from 'react-redux'
import ContentCard from './ContentCard';

function Contents() {

    const contents = useSelector(state => state.contents.contents)

    return (
        <div className='grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 pb-10'>
            {contents?.length && contents.map((content, i) => < ContentCard key={i} content={content} />)}
        </div>
    )
}

export default Contents