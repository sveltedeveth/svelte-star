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
export type GiHazardSignProps = typeof __propDef.props;
export type GiHazardSignEvents = typeof __propDef.events;
export type GiHazardSignSlots = typeof __propDef.slots;
export default class GiHazardSign extends SvelteComponentTyped<GiHazardSignProps, GiHazardSignEvents, GiHazardSignSlots> {
}
export {};
