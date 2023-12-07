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
export type GiBeechProps = typeof __propDef.props;
export type GiBeechEvents = typeof __propDef.events;
export type GiBeechSlots = typeof __propDef.slots;
export default class GiBeech extends SvelteComponentTyped<GiBeechProps, GiBeechEvents, GiBeechSlots> {
}
export {};
