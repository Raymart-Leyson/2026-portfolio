import { Variants } from "framer-motion";

export const springConfig = {
    type: "spring",
    stiffness: 300,
    damping: 30
} as const;

export const transitionConfig = {
    type: "spring",
    stiffness: 260,
    damping: 20
} as const;

export const slideInUp: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: transitionConfig
    },
    exit: {
        y: -20,
        opacity: 0,
        transition: { duration: 0.2 }
    }
};

export const slideInDown: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: transitionConfig
    },
    exit: {
        y: 20,
        opacity: 0,
        transition: { duration: 0.2 }
    }
};

export const slideInLeft: Variants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: transitionConfig
    },
    exit: {
        x: 20,
        opacity: 0,
        transition: { duration: 0.2 }
    }
};

export const slideInRight: Variants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: transitionConfig
    },
    exit: {
        x: -20,
        opacity: 0,
        transition: { duration: 0.2 }
    }
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    },
    exit: {
        opacity: 0,
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
};

export const staggerItem: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: transitionConfig
    }
};

export const scaleUp: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: transitionConfig
    },
    exit: {
        scale: 0.8,
        opacity: 0,
        transition: { duration: 0.2 }
    }
};
