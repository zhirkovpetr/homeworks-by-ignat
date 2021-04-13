import React from 'react'
import s from '../header.module.css'

function Error404() {
    return (
        <div className={s.error}>
            <img alt={'404 Not Found'} src={'https://lh3.googleusercontent.com/proxy/wZrAb_ui0cJT_3tgZt0hWAwniuSwaegfBNQXtQnIjVkK5omMx8ZCp59UJ-sTIADv0rT-IQtWlXi7FqudIYqh1JLsGd4CMJUwvQ6PYMlWybMw2CsO0gNHeRU44nTEHQrjlqExjTkvdi8'}></img>
        </div>
    )
}

export default Error404
