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
export type FaCheckDoubleProps = typeof __propDef.props;
export type FaCheckDoubleEvents = typeof __propDef.events;
export type FaCheckDoubleSlots = typeof __propDef.slots;
export default class FaCheckDouble extends SvelteComponentTyped<FaCheckDoubleProps, FaCheckDoubleEvents, FaCheckDoubleSlots> {
}
export {};
