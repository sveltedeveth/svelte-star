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
export type MdAdjustProps = typeof __propDef.props;
export type MdAdjustEvents = typeof __propDef.events;
export type MdAdjustSlots = typeof __propDef.slots;
export default class MdAdjust extends SvelteComponentTyped<MdAdjustProps, MdAdjustEvents, MdAdjustSlots> {
}
export {};
