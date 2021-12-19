import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Collection } from '../components/Collection';
import { getSection } from '../api';
import { Card } from '../components/Card';

export const Section = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        getSection(id).then(collection => {
            setData(collection);
        });
    }, [id]);

    return (
        <Collection>
            {data.map(item => (
                <Card
                    key={item.id}
                    pathname={`/section/${id}/${item.id}`}
                    title={item.alt_description}
                    coverPhoto={item.urls?.thumb}
                />
            ))}
        </Collection>
    );
};