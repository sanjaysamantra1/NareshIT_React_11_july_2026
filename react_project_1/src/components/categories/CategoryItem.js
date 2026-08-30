import React from 'react'

function CategoryItem({ categoryObj }) {  // props de-structuring
    console.log('CategoryItem Component rendered...')
    let { img_url, label } = categoryObj;
    return <>
        <img src={img_url} />
        <div>{label}</div>
    </>
}
export default React.memo(CategoryItem);