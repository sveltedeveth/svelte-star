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
export type FaAdjustProps = typeof __propDef.props;
export type FaAdjustEvents = typeof __propDef.events;
export type FaAdjustSlots = typeof __propDef.slots;
export default class FaAdjust extends SvelteComponentTyped<FaAdjustProps, FaAdjustEvents, FaAdjustSlots> {
}
export {};
