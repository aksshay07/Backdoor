const Heading: React.FC = props => (
    <h3 className="font-display text-3xl sm:text-4xl xl:text-5xl text-center 
                text-syntax-yellow-darker my-2 sm:my-4 mx-2 sm:mx-3">
        {props.children}
    </h3>
)

export default Heading;