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
export type GiFragranceProps = typeof __propDef.props;
export type GiFragranceEvents = typeof __propDef.events;
export type GiFragranceSlots = typeof __propDef.slots;
export default class GiFragrance extends SvelteComponentTyped<GiFragranceProps, GiFragranceEvents, GiFragranceSlots> {
}
export {};
