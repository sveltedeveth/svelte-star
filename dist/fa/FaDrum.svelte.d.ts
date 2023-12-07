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
export type FaDrumProps = typeof __propDef.props;
export type FaDrumEvents = typeof __propDef.events;
export type FaDrumSlots = typeof __propDef.slots;
export default class FaDrum extends SvelteComponentTyped<FaDrumProps, FaDrumEvents, FaDrumSlots> {
}
export {};
