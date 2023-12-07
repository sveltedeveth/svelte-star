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
export type FaApperProps = typeof __propDef.props;
export type FaApperEvents = typeof __propDef.events;
export type FaApperSlots = typeof __propDef.slots;
export default class FaApper extends SvelteComponentTyped<FaApperProps, FaApperEvents, FaApperSlots> {
}
export {};
