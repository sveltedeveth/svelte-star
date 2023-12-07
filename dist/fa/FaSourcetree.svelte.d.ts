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
export type FaSourcetreeProps = typeof __propDef.props;
export type FaSourcetreeEvents = typeof __propDef.events;
export type FaSourcetreeSlots = typeof __propDef.slots;
export default class FaSourcetree extends SvelteComponentTyped<FaSourcetreeProps, FaSourcetreeEvents, FaSourcetreeSlots> {
}
export {};
