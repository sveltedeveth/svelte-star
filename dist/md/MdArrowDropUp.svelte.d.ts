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
export type MdArrowDropUpProps = typeof __propDef.props;
export type MdArrowDropUpEvents = typeof __propDef.events;
export type MdArrowDropUpSlots = typeof __propDef.slots;
export default class MdArrowDropUp extends SvelteComponentTyped<MdArrowDropUpProps, MdArrowDropUpEvents, MdArrowDropUpSlots> {
}
export {};
