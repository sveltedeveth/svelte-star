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
export type MdFastForwardProps = typeof __propDef.props;
export type MdFastForwardEvents = typeof __propDef.events;
export type MdFastForwardSlots = typeof __propDef.slots;
export default class MdFastForward extends SvelteComponentTyped<MdFastForwardProps, MdFastForwardEvents, MdFastForwardSlots> {
}
export {};
