import React, { useState } from 'react'

export default function FolderExplorer({ folderInfo }) {
    const [expand, setExpand] = useState(false);
    if (folderInfo.isFolder) { // if Folder
        return <div>
            <span onClick={() => setExpand(!expand)} style={{ cursor: 'pointer' }}>
                📂{folderInfo.name}
            </span>
            <br />
            <div style={{display:expand?'block':'none', paddingLeft:'20px'}}>
                {folderInfo.items.map((subFolderInfo, ind) => {
                    return <FolderExplorer folderInfo={subFolderInfo} key={ind} />
                })}
            </div>
        </div>
    } else { // if File
        return <span>📄{folderInfo.name}<br/></span>
    }
}
