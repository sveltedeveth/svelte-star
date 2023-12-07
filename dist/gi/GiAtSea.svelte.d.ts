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
export type GiAtSeaProps = typeof __propDef.props;
export type GiAtSeaEvents = typeof __propDef.events;
export type GiAtSeaSlots = typeof __propDef.slots;
export default class GiAtSea extends SvelteComponentTyped<GiAtSeaProps, GiAtSeaEvents, GiAtSeaSlots> {
}
export {};
