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
export type MdForwardProps = typeof __propDef.props;
export type MdForwardEvents = typeof __propDef.events;
export type MdForwardSlots = typeof __propDef.slots;
export default class MdForward extends SvelteComponentTyped<MdForwardProps, MdForwardEvents, MdForwardSlots> {
}
export {};
