import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const QuerySuperHeroes = () => {
    const { isLoading, data, error } = useQuery('super-heroes', () => {
        return axios.get('http://localhost:4000/superheros');
    });

    if (isLoading) {
        return <h2>Loading ..</h2>;
    }

    if (error) {
        return <h2>Error: {error.message}</h2>;
    }

    return (
        <div>
            {
                data?.data.map(hero => {
                    return <div key={hero.name}>{hero.name}</div>;
                })
            }
        </div>
    );
};

export default QuerySuperHeroes;
