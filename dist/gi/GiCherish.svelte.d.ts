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
export type GiCherishProps = typeof __propDef.props;
export type GiCherishEvents = typeof __propDef.events;
export type GiCherishSlots = typeof __propDef.slots;
export default class GiCherish extends SvelteComponentTyped<GiCherishProps, GiCherishEvents, GiCherishSlots> {
}
export {};
