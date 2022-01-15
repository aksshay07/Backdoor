export const buttonVariants = {
    hover: {
        scale: 1.08,
        transition: {
            type: "tween",
            duration: 0.4
        }
    }
}

export const routeVariants = {
    hidden: {
        x: 250,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "tween",
            duration: 0.4,
            ease: "easeInOut"
        }
    },
    exit: {
        x: -250,
        opacity: 0,
        transition: {
            type: "tween",
            duration: 0.4,
            ease: "easeInOut"
        }
    }
}

export const modalVariants = {
    hidden: {
        opacity: 0,
        y: -100
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 170
        }
    },
    exit: {
        opacity: 0,
        y: -100,
        transition: {
            type: "tween"
        }
    }
}

export const backdropVariants = {
    hidden: {
        opacity: 0,
        transition: {
            type: "tween"
        }
    },
    visible: {
        opacity: 1,
        transition: {
            type: "tween"
        }
    }
}

export const sidebarVariants = {
    hidden: {
        opacity: 0,
        x: -250
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "tween",
            ease: "circOut",
            duration: 0.6,
            delay: 0.2
        }
    }
}

export const cardVariants = {
    hover: {
        scale: 1.02,
        y: -5,
        transition: {
            type: "tween",
            duration: 0.5,
            ease: "backOut"
        }
    }
}