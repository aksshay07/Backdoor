import PageBody from '../../components/Utilities/PageBody';
import { motion } from 'framer-motion';
import Sidebar from '../../components/Utilities/Sidebar';
import Navbar from '../../components/Navbars/Navbar';
import Heading from '../../components/Utilities/Heading';
import InputField from '../../components/Utilities/InputField';
import TagsSelector from '../../components/Utilities/TagsSelector';
import SuccessButton from '../../components/Buttons/SuccessButton';
import TextArea from '../../components/Utilities/TextArea';
import ErrorMessage from '../../components/Utilities/ErrorMessage';
import { routeVariants } from '../../variants/index';
import { fetchAllThreads, createPost } from '../../api/index';
import { IThread } from '../../api/modelsInterface';
import postSchema from '../../schema/postSchema';
import { toast, Flip } from 'react-toastify';
import PublishPostIllustration from '../../assets/publish-post-illustration.svg';
import { ChevronDownIcon } from '@heroicons/react/solid';

import { useState, useRef, FormEvent, useEffect, MouseEvent } from 'react';
import { useHistory } from 'react-router-dom';

const NewPost: React.FC = () => {
    const [threadList, setThreadList] = useState<string[]>();
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [selectedThreads, setSelectedThreads] = useState<string[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>();
    const history = useHistory();
    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);
    const tagsSelectorRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        fetchAllThreads()
            .then(res => {
                const threads: Array<IThread> = res.data;
                const threadTitles: string[] = [];
                threads.forEach(thread => threadTitles.push(thread.title));
                setThreadList(threadTitles);
            })
            .catch(err => {
                history.goBack();
                toast.error(err.response.data.message, { transition: Flip });
            });
    }, [history]);

    const dropdownToggleHandler = () => {
        setShowDropdown(prevState => !prevState);
    }

    const toggleThreadsHandler = (e: MouseEvent<HTMLLIElement>) => {
        const threadTitle = e.currentTarget.textContent as string;
        setSelectedThreads(prevSelected => {
            const currentlySelected = prevSelected;

            // Why doesn't this work though?
            // console.log(e.currentTarget.textContent);

            // If the thread isn't already selected, "select" or add it, otherwise remove it.
            if (!prevSelected.includes(threadTitle)) {
                currentlySelected.push(threadTitle);
            } else {
                currentlySelected.splice(currentlySelected.indexOf(threadTitle), 1);
            }
            (tagsSelectorRef.current as HTMLInputElement).value = currentlySelected.join(', ');
            console.log(currentlySelected);
            return currentlySelected
        });
    }

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const title = titleRef.current?.value as string;
        const description = descriptionRef.current?.value as string;
        const { error } = postSchema.validate({
            title,
            description,
            threads: selectedThreads
        });
        if (error) {
            setErrorMessage(error.message);
        } else {
            createPost({
                title,
                body: description,
                tags: selectedThreads
            })
                .then(res => {
                    history.push("/threads");
                    toast.success(res.data.message, { transition: Flip });
                })
                .catch(err => toast.error(err.response.data.message, { transition: Flip }));
        }
    }

    return (
        <motion.section
            variants={routeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Navbar />
            <PageBody>
                <Sidebar
                    bgColor="grey-lighter"
                    title="New Post"
                    description="Tip: Give your post a short but catchy title and a proper description explaining everything in detail."
                    titleColor="yellow"
                    descriptionColor="grey-light"
                    illustration={PublishPostIllustration}
                />
                <div className="flex flex-1 justify-center items-center flex-wrap mt-8 mb-20 mx-2 box-border">
                    <div className="bg-grey-lighter flex flex-col items-center w-11/12 md:w-9/12 xl:w-8/12 2xl:w-7/12
                    m-4 py-6 sm:py-6 xl:py-10 xl:px-2 rounded-3xl">
                        <Heading>New Post</Heading>
                        <form onSubmit={submitHandler} className="w-full mt-4 mb-2 mx-4 flex px-8 md:px-10
                        lg:px-12 flex-col items-center">
                            <InputField
                                placeholder="Enter your post title here. (Keep it short!)"
                                label="Post Title"
                                type="text"
                                inputRef={titleRef}
                                required
                            />
                            <TextArea
                                label="Post Description"
                                placeholder="Enter your post description here"
                                limit={2000}
                                textAreaRef={descriptionRef}
                                required
                            />
                            <TagsSelector label="Tags"
                                allThreads={threadList}
                                selectedThreads={selectedThreads}
                                threadSelectHandler={toggleThreadsHandler}
                                dropdownToggleHandler={dropdownToggleHandler}
                                showDropdown={showDropdown}
                                inputRef={tagsSelectorRef}
                            >
                                <ChevronDownIcon className="w-2/3 text-syntax-yellow" />
                            </TagsSelector>
                            <div className="mt-4">
                                <SuccessButton type="submit">Post</SuccessButton>
                            </div>
                        </form>
                        <ErrorMessage>{errorMessage}</ErrorMessage>
                    </div>
                </div>
            </PageBody>
        </motion.section>
    );
}

export default NewPost;