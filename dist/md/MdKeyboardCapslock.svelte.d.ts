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
export type MdKeyboardCapslockProps = typeof __propDef.props;
export type MdKeyboardCapslockEvents = typeof __propDef.events;
export type MdKeyboardCapslockSlots = typeof __propDef.slots;
export default class MdKeyboardCapslock extends SvelteComponentTyped<MdKeyboardCapslockProps, MdKeyboardCapslockEvents, MdKeyboardCapslockSlots> {
}
export {};
