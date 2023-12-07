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
export type MdKeyboardTabProps = typeof __propDef.props;
export type MdKeyboardTabEvents = typeof __propDef.events;
export type MdKeyboardTabSlots = typeof __propDef.slots;
export default class MdKeyboardTab extends SvelteComponentTyped<MdKeyboardTabProps, MdKeyboardTabEvents, MdKeyboardTabSlots> {
}
export {};
