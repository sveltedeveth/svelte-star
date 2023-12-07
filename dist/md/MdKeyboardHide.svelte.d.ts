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
export type MdKeyboardHideProps = typeof __propDef.props;
export type MdKeyboardHideEvents = typeof __propDef.events;
export type MdKeyboardHideSlots = typeof __propDef.slots;
export default class MdKeyboardHide extends SvelteComponentTyped<MdKeyboardHideProps, MdKeyboardHideEvents, MdKeyboardHideSlots> {
}
export {};
