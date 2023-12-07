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
export type FaUspsProps = typeof __propDef.props;
export type FaUspsEvents = typeof __propDef.events;
export type FaUspsSlots = typeof __propDef.slots;
export default class FaUsps extends SvelteComponentTyped<FaUspsProps, FaUspsEvents, FaUspsSlots> {
}
export {};
