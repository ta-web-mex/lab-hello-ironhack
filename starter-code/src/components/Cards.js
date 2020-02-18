import React from 'react'

function Cards(){
    return(
        <div className = "footer">
             <div>
                <img src="/images/icon1.png" />
                <p>React makes it painless to create interactive UI</p>
            </div>
            <div>
                <img src="/images/icon2.png" />
                <p>Build encapsulated component that manae their state</p>
            </div>
            <div>
                <img src="/images/icon3.png" />
                <p>A set of immutable values are passed to the components</p>
            </div>
            <div>
                <img src="/images/icon4.png" />
                <p>Statically-typed design to run in modern browsers</p>
            </div>
        </div>
    )
}

export default Cards