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
export type GiBelgiumProps = typeof __propDef.props;
export type GiBelgiumEvents = typeof __propDef.events;
export type GiBelgiumSlots = typeof __propDef.slots;
export default class GiBelgium extends SvelteComponentTyped<GiBelgiumProps, GiBelgiumEvents, GiBelgiumSlots> {
}
export {};
