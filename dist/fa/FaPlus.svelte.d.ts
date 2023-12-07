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
export type FaPlusProps = typeof __propDef.props;
export type FaPlusEvents = typeof __propDef.events;
export type FaPlusSlots = typeof __propDef.slots;
export default class FaPlus extends SvelteComponentTyped<FaPlusProps, FaPlusEvents, FaPlusSlots> {
}
export {};
