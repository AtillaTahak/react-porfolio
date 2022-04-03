import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/logoMy.svg'
import './index.scss'

const Logo = () => {
    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)

        gsap
            .timeline()
            .to(bgRef.current, {
                duration: 1,
                opacity: 1,
            })
            .from(outlineLogoRef.current, {
                drawSVG: 0,
                duration: 20,
            })

        gsap.fromTo(
            solidLogoRef.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 4,
                duration: 4,
            }
        )
    }, [])

    return (
        <div className="logo-container" ref={bgRef}>
            <img
                className="solid-logo"
                ref={solidLogoRef}
                src={LogoS}
                alt="JavaScript,  Developer"
            />

            <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-0.1 -0.1 100.2 100.2"
                >
                <path
                    ref={outlineLogoRef}
                    d="M 50 0 C 22.4 0 0 22.4 0 50 s 22.4 50 50 50 l 0 0 c 27.6 0 50 -22.4 50 -50 S 77.6 0 50 0 z M 50 93.6 L 50 93.6 C 25.9 93.6 6.4 74.1 6.4 50 C 6.4 25.9 25.9 6.4 50 6.4 S 93.6 25.9 93.6 50 S 74.1 93.6 50 93.6 z M 67.7 36.3 H 54.7 L 50 21.8 l -4.7 14.5 H 32.3 l 0.1 -0.1 l 0.1 -0.5 l 0.6 -1.6 l 5.3 -14.3 l 0.9 -2.6 l 0.1 -0.3 l 0.1 -0.2 c 0.5 -1.2 1.3 -2.2 2.5 -2.7 c 0.1 -0.1 0.1 -0.1 0.2 -0.1 c 0.1 -0.1 0.3 -0.1 0.4 -0.2 c 2 -0.9 4.5 -1.4 7.3 -1.4 H 50 c 2.7 0 5.3 0.5 7.3 1.4 c 0.1 0.1 0.3 0.1 0.4 0.2 c 0.1 0 0.1 0.1 0.2 0.1 c 1.1 0.6 2 1.6 2.4 2.7 l 0.1 0.2 l 0.1 0.3 l 0.9 2.6 l 1.3 3.3 l 0.9 2.5 l 0.1 0.4 l 0.6 1.6 L 67.7 36.3 z M 75.3 74 h -11 l -2.1 -5.7 c -0.9 -2.3 -3.1 -3.9 -5.6 -3.9 H 43.2 c -2.5 0 -4.7 1.6 -5.5 3.9 L 35.6 74 H 24.5 c -3 0 -5.1 -3 -4.1 -5.8 l 1 -2.7 l 0.6 -1.6 l 3.2 -8.6 l 0.1 -0.3 l 0.3 -0.9 l 2.9 -7.7 l 0 0 l 3.2 -8.5 l 0.1 -0.2 l 10.6 7.7 l -4.7 14.5 L 50 50.8 l 12.4 9 l -4.7 -14.5 l 10.5 -7.6 l 3.7 10.1 l 2.3 6.3 l 0.3 0.9 l 0.1 0.3 l 3.2 8.6 l 0.6 1.6 l 0.9 2.7 C 80.4 71 78.3 74 75.3 74 z z z h -2.2 c -0.1 0 -0.1 0.1 -0.2 0.2 z h -5.1 z z" 
                    stroke="#EAE9BE" 
                    fill="none" 
                    />
            </svg>
        </div>
    )
}

export default Logo