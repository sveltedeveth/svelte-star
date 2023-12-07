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
export type MdAddBoxProps = typeof __propDef.props;
export type MdAddBoxEvents = typeof __propDef.events;
export type MdAddBoxSlots = typeof __propDef.slots;
export default class MdAddBox extends SvelteComponentTyped<MdAddBoxProps, MdAddBoxEvents, MdAddBoxSlots> {
}
export {};
