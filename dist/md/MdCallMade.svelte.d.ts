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
export type MdCallMadeProps = typeof __propDef.props;
export type MdCallMadeEvents = typeof __propDef.events;
export type MdCallMadeSlots = typeof __propDef.slots;
export default class MdCallMade extends SvelteComponentTyped<MdCallMadeProps, MdCallMadeEvents, MdCallMadeSlots> {
}
export {};
