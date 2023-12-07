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
export type GiStahlhelmProps = typeof __propDef.props;
export type GiStahlhelmEvents = typeof __propDef.events;
export type GiStahlhelmSlots = typeof __propDef.slots;
export default class GiStahlhelm extends SvelteComponentTyped<GiStahlhelmProps, GiStahlhelmEvents, GiStahlhelmSlots> {
}
export {};
