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
export type GiBadGnomeProps = typeof __propDef.props;
export type GiBadGnomeEvents = typeof __propDef.events;
export type GiBadGnomeSlots = typeof __propDef.slots;
export default class GiBadGnome extends SvelteComponentTyped<GiBadGnomeProps, GiBadGnomeEvents, GiBadGnomeSlots> {
}
export {};
