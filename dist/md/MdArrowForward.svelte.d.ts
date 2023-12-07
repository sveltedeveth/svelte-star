import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MdArrowForwardProps = typeof __propDef.props;
export type MdArrowForwardEvents = typeof __propDef.events;
export type MdArrowForwardSlots = typeof __propDef.slots;
export default class MdArrowForward extends SvelteComponentTyped<MdArrowForwardProps, MdArrowForwardEvents, MdArrowForwardSlots> {
}
export {};
