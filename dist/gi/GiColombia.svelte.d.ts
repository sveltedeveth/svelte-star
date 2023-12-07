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
export type GiColombiaProps = typeof __propDef.props;
export type GiColombiaEvents = typeof __propDef.events;
export type GiColombiaSlots = typeof __propDef.slots;
export default class GiColombia extends SvelteComponentTyped<GiColombiaProps, GiColombiaEvents, GiColombiaSlots> {
}
export {};
