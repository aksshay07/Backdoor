const CardBody: React.FC = props => (
    <p className="font-body text-md md:text-lg 2xl:text-xl text-white my-1 overflow-ellipsis">
        {props.children}
    </p>
);

export default CardBody;