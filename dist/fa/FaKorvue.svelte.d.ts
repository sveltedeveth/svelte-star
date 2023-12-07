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
export type FaKorvueProps = typeof __propDef.props;
export type FaKorvueEvents = typeof __propDef.events;
export type FaKorvueSlots = typeof __propDef.slots;
export default class FaKorvue extends SvelteComponentTyped<FaKorvueProps, FaKorvueEvents, FaKorvueSlots> {
}
export {};
