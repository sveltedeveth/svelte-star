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
export type FaSmogProps = typeof __propDef.props;
export type FaSmogEvents = typeof __propDef.events;
export type FaSmogSlots = typeof __propDef.slots;
export default class FaSmog extends SvelteComponentTyped<FaSmogProps, FaSmogEvents, FaSmogSlots> {
}
export {};
