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
export type FaTiredProps = typeof __propDef.props;
export type FaTiredEvents = typeof __propDef.events;
export type FaTiredSlots = typeof __propDef.slots;
export default class FaTired extends SvelteComponentTyped<FaTiredProps, FaTiredEvents, FaTiredSlots> {
}
export {};
