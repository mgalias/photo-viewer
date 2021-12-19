import { useState, useEffect } from 'react';
import { getCollection } from '../api';
import { Card } from '../components/Card';
import { Collection } from '../components/Collection';

export const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getCollection().then(collection => {
            setData(collection);
        });
    }, []);

    return (
        <Collection>{data.map(item =>
            <Card
                key={item.id}
                title={item.title}
                photosNumber={item?.total_photos}
                coverPhoto={item?.cover_photo?.urls?.small}
                pathname={`/section/${item.id}`}
            />
        )}</Collection>
    )
};