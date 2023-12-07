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
export type GiBisonProps = typeof __propDef.props;
export type GiBisonEvents = typeof __propDef.events;
export type GiBisonSlots = typeof __propDef.slots;
export default class GiBison extends SvelteComponentTyped<GiBisonProps, GiBisonEvents, GiBisonSlots> {
}
export {};
