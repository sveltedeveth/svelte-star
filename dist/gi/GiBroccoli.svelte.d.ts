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
export type GiBroccoliProps = typeof __propDef.props;
export type GiBroccoliEvents = typeof __propDef.events;
export type GiBroccoliSlots = typeof __propDef.slots;
export default class GiBroccoli extends SvelteComponentTyped<GiBroccoliProps, GiBroccoliEvents, GiBroccoliSlots> {
}
export {};
