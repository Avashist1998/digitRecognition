interface Props {
    condition: boolean;
    children: React.ReactNode;
}


const ConditionalRender = ({ condition, children }: Props) => {
    return (
        <>
            {condition ? children : null}
        </>
    )
}

export default ConditionalRender;