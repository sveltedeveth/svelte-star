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
export type FaHippoProps = typeof __propDef.props;
export type FaHippoEvents = typeof __propDef.events;
export type FaHippoSlots = typeof __propDef.slots;
export default class FaHippo extends SvelteComponentTyped<FaHippoProps, FaHippoEvents, FaHippoSlots> {
}
export {};
