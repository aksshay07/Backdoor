import React from "react";

interface Props {
    allThreads?: string[];
    selectedThreads: string[] | undefined;
    label?: string;
    showDropdown: boolean;
    inputRef: React.RefObject<HTMLInputElement>;
    dropdownToggleHandler: () => void;
    threadSelectHandler: (e: React.MouseEvent<HTMLLIElement>) => void;
}

const TagsSelector: React.FC<Props> = props => {

    return (
        <div className="field w-full my-4 mx-4 lg:mx-4 xl:mx-0">
            <div className="field relative">
                <label className="label font-normal">{props.label}</label>
                <p className="control has-icons-right">
                    <input className="input rounded-xl px-4 cursor-pointer"
                        type="text"
                        ref={props.inputRef}
                        onClick={props.dropdownToggleHandler}
                        readOnly />
                    <span className="icon is-small is-right flex justify-center items-center mx-2"
                        onClick={props.dropdownToggleHandler}
                    >
                        {props.children}
                    </span>
                </p>
                {props.showDropdown && (
                    <div className="p-5 absolute right-0 top-full">
                        <ul className="flex flex-col justify-start items-start scrollbar border-2
                border-grey-light text-left bg-grey-lightest rounded-lg max-w-screen-sm overflow-y-scroll max-h-52 py-1">
                            {props.allThreads?.map(tag => {
                                return (
                                    <li className="w-full bg-grey-lighter my-1 font-body cursor-pointer
                                text-lg pl-4 pr-20 lg:pr-56 xl:pr-72 2xl:pr-96 py-3 text-grey-light"
                                        onClick={props.threadSelectHandler}
                                        key={tag}>
                                        {tag}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TagsSelector;