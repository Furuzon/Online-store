import React from 'react'

export default function Input() {
    return (
        <div className="col-md-6 subscribe">
            <h1 className="mb-4">Sneacers theme <br/> Coming Soon</h1>
            <div className="d-flex">
                <input type="text" style={{borderRadius: 0}} className="form-control" placeholder="Your E-mail" />
                <div className="input-group-append">
                    <button className="subscribe-button">subscribe</button>
                </div>
            </div>
        </div>
    )
}
