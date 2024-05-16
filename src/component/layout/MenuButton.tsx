import React from 'react';
import {IoLanguage, IoMenu} from 'react-icons/io5';
import {motion} from 'framer-motion';
import {useCollapseStates} from '@/hook/useCollapseState';
import MenuContent from '@/component/layout/MenuContent';
import {LocaleSelector} from '@/component/LocaleSelector';

const MenuButton: React.FC = () => {
    const {state, open, close, motionProps} = useCollapseStates({
        initialMotionProps: {
            mask: {initial: {opacity: 0}},
            menu: {initial: {translateX: '100%'}},
        },
        renderMotionProps: (state) => ({
            mask: {
                initial: {opacity: state === 'opening' ? 0 : 1},
                animate: {opacity: state === 'opening' ? 1 : 0},
            },
            menu: {
                initial: {translateX: state === 'opening' ? '100%' : '0px'},
                animate: {translateX: state === 'opening' ? '0px' : '100%'},
            },
        }),
    });
    return (
        <div className="h-full md:hidden">
            <button
                className="flex aspect-square h-full items-center rounded bg-white p-1 text-teal-600 active:bg-teal-600 active:text-white"
                onClick={open}
            >
                <IoMenu className="h-full w-full"/>
            </button>
            <motion.div
                {...motionProps.mask}
                id="mask"
                className={`fixed left-0 top-0 h-full w-full bg-black/50 ${state === 'closed' ? 'hidden' : ''}`}
                onClick={(event) =>
                    (event.target as HTMLElement).id === 'mask' && close()
                }
            >
                <motion.div
                    {...motionProps.menu}
                    transition={{type: 'linear'}}
                    className="absolute right-0 top-0 ml-auto h-full w-3/5 space-y-6 rounded-l bg-white p-6 [&>*+*]:border-t [&>*+*]:pt-6"
                >
                    <div className="flex justify-between">
                        <IoLanguage className="h-5 w-5"/>
                        <LocaleSelector/>
                    </div>
                    <MenuContent onClick={close}/>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default MenuButton;
