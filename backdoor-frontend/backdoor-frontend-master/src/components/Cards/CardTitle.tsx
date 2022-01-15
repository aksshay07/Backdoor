const CardTitle: React.FC = props => (
    <h2 className="text-display font-display text-xl md:text-2xl 2xl:text-3xl text-syntax-yellow my-2">
        {props.children}
    </h2>
);

export default CardTitle;