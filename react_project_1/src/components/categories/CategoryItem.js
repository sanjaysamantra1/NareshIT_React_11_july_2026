import React from 'react'

export default function CategoryItem(props) {
    return <>
        <img src={props.categoryObj.img_url} />
        <div>{props.categoryObj.label}</div>
    </>
}
