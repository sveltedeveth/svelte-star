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
export type MdKeyboardReturnProps = typeof __propDef.props;
export type MdKeyboardReturnEvents = typeof __propDef.events;
export type MdKeyboardReturnSlots = typeof __propDef.slots;
export default class MdKeyboardReturn extends SvelteComponentTyped<MdKeyboardReturnProps, MdKeyboardReturnEvents, MdKeyboardReturnSlots> {
}
export {};
