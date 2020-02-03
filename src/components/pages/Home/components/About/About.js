import React from 'react'
import AboutText from './components/AboutText'
import AboutImage from './components/AboutImage'

export default function About() {
    return (
        <section>
            <div class="row d-flex justify-content-center">
                <div class="col-md-10">
                    <div class="row">
                        <AboutText/>
                        <AboutImage/>
                    </div>
                </div>
            </div>
        </section>
    )
}
