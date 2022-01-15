const PageBody: React.FC = props => {
    /* Add pt-16 to this section if navbar is fixed instead of sticky */ 
    return (
        < section className="flex flex-wrap w-screen h-screen box-border overflow-x-hidden scrollbar" >
            { props.children}
        </section >
    );
}

export default PageBody;
