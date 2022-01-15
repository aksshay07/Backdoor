const ErrorMessage: React.FC = props => (
    <p className="font-display text-red text-lg text-center text-md mt-4 mx-2">
        {props.children}
    </p>
);

export default ErrorMessage;