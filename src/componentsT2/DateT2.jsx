import '/src/styleT2/DateT2.css';

export const DateT2 = ({date}) => {
    return (
        <>
            <div className="containerD">
                <div className="contadorD">
                    <p>
                        {date}
                    </p>
                </div>
            </div>
        </>
    )
}