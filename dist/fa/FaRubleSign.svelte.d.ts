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
export type FaRubleSignProps = typeof __propDef.props;
export type FaRubleSignEvents = typeof __propDef.events;
export type FaRubleSignSlots = typeof __propDef.slots;
export default class FaRubleSign extends SvelteComponentTyped<FaRubleSignProps, FaRubleSignEvents, FaRubleSignSlots> {
}
export {};
