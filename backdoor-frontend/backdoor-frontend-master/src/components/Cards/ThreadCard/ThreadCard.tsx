import { cardVariants } from '../../../variants/index'
import CardTitle from '../CardTitle';
import CardBody from '../CardBody';
import { ChatAlt2Icon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import classes from './ThreadCard.module.scss';

interface Props {
    title: string;
    body: string;
    numberOfPosts: Number;
}

const ThreadCard: React.FC<Props> = props => {
    let threadBody;
    if (props.body.length > 70)
        threadBody = props.body.substring(0, 60) + "...";
    else
        threadBody = props.body;

    return (
        <motion.div className={`flex flex-col justify-around w-11/12 md:w-5/12 xl:w-2/5 2xl:w-4/12 cursor-pointer max-h-72
                            ${classes.ThreadCard} p-8 md:p-12 xl:px-12 xl:py-8 rounded-2xl bg-grey-lighter m-2 box-border`}
            key={props.title}
            variants={cardVariants}
            whileHover="hover"
        >
            <Link to={`/threads/${props.title}`}>
                <CardTitle>
                    {props.title}
                </CardTitle>

                <hr className="mb-4 border-red-lighter" />

                <CardBody>
                    {threadBody}
                </CardBody>
                <div className="max-h-min flex justify-start items-center mt-4">
                    <ChatAlt2Icon className="w-8 text-red-lighter" />
                    <p className="mx-4 text-grey-light">{props.numberOfPosts} posts</p>
                </div>
            </Link>
        </motion.div>
    );
}

export default ThreadCard;