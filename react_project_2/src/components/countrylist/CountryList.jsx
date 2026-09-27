import React from 'react'
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';

const get_countries_query = gql`
    query CountryList {
  countries{
    code
    name
    capital
    currency
  }
}
  `;

export default function CountryList() {
    const { loading, error, data } = useQuery(get_countries_query);
    console.log(data)
    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Something went wrong...</h1>

    return <>
        <h3 className="text-center">CountryList</h3>

        <table className="table table-bordered">
            <tbody>
                {data.countries.map(user => {
                    return <tr>
                        <td>{user.code}</td>
                        <td>{user.name}</td>
                        <td>{user.capital}</td>
                        <td>{user.currency}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
}
