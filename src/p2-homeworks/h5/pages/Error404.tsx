import React from 'react'
import s from '../header.module.css'

function Error404() {
    return (
        <div className={s.error}>
            <img alt={'404 Not Found'}
                 src={'https://avatars.mds.yandex.net/get-zen_doc/27036/pub_5b1283ca2f578c66e5ff0c70_5b1283dc1410c34e92daf259/scale_1200'}/>
        </div>
    )
}

export default Error404
