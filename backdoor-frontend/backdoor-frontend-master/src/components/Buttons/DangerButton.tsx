import { motion } from 'framer-motion';
import { buttonVariants } from '../../variants/index';

interface Props {
    type?: "button" | "submit" | "reset" | undefined;
    buttonRef?: React.RefObject<HTMLButtonElement>;
}

const DangerButton: React.FC<Props> = props => (
    <motion.button className="bg-red hover:bg-red-lighter hover:shadow-2xl transition-colors duration-300 mt-2 focus:outline-none
    rounded-xl font-display text-grey font-bold text-l md:text-xl py-2 px-4 md:py-3 md:px-5 xl:px-7"
        variants={buttonVariants}
        whileHover="hover"
        type={props.type}
        ref={props.buttonRef}
    >
        {props.children}
    </motion.button>
);

export default DangerButton;