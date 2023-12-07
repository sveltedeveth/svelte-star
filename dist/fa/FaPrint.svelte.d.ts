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
export type FaPrintProps = typeof __propDef.props;
export type FaPrintEvents = typeof __propDef.events;
export type FaPrintSlots = typeof __propDef.slots;
export default class FaPrint extends SvelteComponentTyped<FaPrintProps, FaPrintEvents, FaPrintSlots> {
}
export {};
