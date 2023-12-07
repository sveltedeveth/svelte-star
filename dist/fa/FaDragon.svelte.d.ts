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
export type FaDragonProps = typeof __propDef.props;
export type FaDragonEvents = typeof __propDef.events;
export type FaDragonSlots = typeof __propDef.slots;
export default class FaDragon extends SvelteComponentTyped<FaDragonProps, FaDragonEvents, FaDragonSlots> {
}
export {};
