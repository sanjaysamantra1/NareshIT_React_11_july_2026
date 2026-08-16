import React from 'react'

export default function CategoryItem({ categoryObj }) {  // props de-structuring
    let { img_url, label } = categoryObj;
    return <>
        <img src={img_url} />
        <div>{label}</div>
    </>
}
