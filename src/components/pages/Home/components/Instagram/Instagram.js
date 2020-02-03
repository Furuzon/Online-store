import React from 'react'
import Paragraph from './components/Paragraph'
import Image from './components/Image'

export default function Instagram() {
    return (
        <section>
            <div className="row d-flex justify-content-center">
                <div className="col-md-9 instagram-section">
                    <Paragraph />
                    <Image />
                </div>
            </div>
        </section>
    )
}
