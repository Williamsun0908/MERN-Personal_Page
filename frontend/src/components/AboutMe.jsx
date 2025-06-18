import React from 'react'
import performance from "../performance.png"
import self from "../self.JPG"

const AboutMe = () => {
  return (
    <div>
        <div className="flex px-12 py-6">
            <div className="w-3/5">
                <div className="text-4xl mb-5 font-bold flex justify-center">
                    About Me
                </div>
                <div>
                    My name is William(Jiahong) Sun. I am an undergraduate student at Stony Brook University. 
                    My mathematical interests lies in algebra and number theory. Recently I am studying rationality
                    of zeta-function on quasi-projective varieties, and proof of the (general) Riemann Hypothesis
                    for special varieties over a finite field.
                </div>
                <div className="my-3">
                    Last two semesters I taught MAT 123(Pre-calculus) and MAT 125(Calculus A) recitations. <a className=" underline font-bold" href="https://www.math.stonybrook.edu/cards/sunwilliam.html">Here</a> is my math department Webpage.
                </div>
                <div className="my-3">
                    I have studied classical piano performance for 15 years. To the left is a picture of me performed in 
                    Staller center recital hall for undergraduate recital event.
                </div>
            </div>
            <div className="w-1/2 flex justify-center">
                <img style={{ width: '70%', height: 'auto' }} alt="Undergraduate Recital Event Performance" src={performance}></img>
            </div>
        </div>
    </div>
  )
}

export default AboutMe
