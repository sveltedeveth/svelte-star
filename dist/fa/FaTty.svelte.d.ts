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
export type FaTtyProps = typeof __propDef.props;
export type FaTtyEvents = typeof __propDef.events;
export type FaTtySlots = typeof __propDef.slots;
export default class FaTty extends SvelteComponentTyped<FaTtyProps, FaTtyEvents, FaTtySlots> {
}
export {};
