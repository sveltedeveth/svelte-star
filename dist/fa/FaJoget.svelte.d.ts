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
export type FaJogetProps = typeof __propDef.props;
export type FaJogetEvents = typeof __propDef.events;
export type FaJogetSlots = typeof __propDef.slots;
export default class FaJoget extends SvelteComponentTyped<FaJogetProps, FaJogetEvents, FaJogetSlots> {
}
export {};
