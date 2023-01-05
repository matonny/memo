import { useState } from "react"

type CardProps = Readonly<{
    card: string
    flipped: boolean
}>
export const Card = ({ card, flipped }: CardProps) => {
    const frontClass = "cardFront " + flipped ? "flipped" : ""
    const backClass = "cardBack " + flipped ? "flipped" : ""
    const [turned, setTurned] = useState(false)
    return (
        <>
            <div className="yikes" onClick={() => { setTurned(!turned) }}>
                <div className={frontClass}>
                    Front
                </div>
                <div className={backClass}>
                    Back
                </div>
            </div>
        </>
    )

}