import React from 'react'
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';

const get_countries_query = gql`
    query CountryList {
        countries(filter: { name: { regex: "^A" } }){
            code
            name
            capital
            currency
        }
    }`;

export default function CountryList() {
    const { loading, error, data } = useQuery(get_countries_query);
    console.log(data)
    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Something went wrong...</h1>

    return <>
        <h3 className="text-center">CountryList</h3>

        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Capital</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {data.countries.map(country => {
                    return <tr key={country.code}>
                        <td>{country.code}</td>
                        <td>{country.name}</td>
                        <td>{country.capital}</td>
                        <td>{country.currency}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
}
