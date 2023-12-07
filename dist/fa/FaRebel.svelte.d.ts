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
export type FaRebelProps = typeof __propDef.props;
export type FaRebelEvents = typeof __propDef.events;
export type FaRebelSlots = typeof __propDef.slots;
export default class FaRebel extends SvelteComponentTyped<FaRebelProps, FaRebelEvents, FaRebelSlots> {
}
export {};
