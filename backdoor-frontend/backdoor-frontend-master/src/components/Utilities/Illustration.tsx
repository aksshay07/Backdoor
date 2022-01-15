interface Props {
    src: string;
}

const Illustration: React.FC<Props> = (props) => (
    <div className="flex flex-grow flex-col flex-wrap md:max-w-1/3 justify-center items-center text-white mx-8 md:mx-12 my-20 max-w-xs xl:max-w-sm">
        <img src={props.src} alt="Post Illustration" />
    </div>
);

export default Illustration;