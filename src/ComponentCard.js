import React from 'react'

const JudulDoang = () => {
    return (
        <div>
            <h2>Belajar Component</h2>
        </div>
    )
}

const ComponentCard = (props) => {
    return (
        <div class="kartu">
            <JudulDoang />
            <p>{props.name}</p>
            <p>{props.job}</p>
        </div>
    )
}

export default ComponentCard
