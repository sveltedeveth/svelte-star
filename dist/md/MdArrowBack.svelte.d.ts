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
export type MdArrowBackProps = typeof __propDef.props;
export type MdArrowBackEvents = typeof __propDef.events;
export type MdArrowBackSlots = typeof __propDef.slots;
export default class MdArrowBack extends SvelteComponentTyped<MdArrowBackProps, MdArrowBackEvents, MdArrowBackSlots> {
}
export {};
