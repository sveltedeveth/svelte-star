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
export type GiEnergiseProps = typeof __propDef.props;
export type GiEnergiseEvents = typeof __propDef.events;
export type GiEnergiseSlots = typeof __propDef.slots;
export default class GiEnergise extends SvelteComponentTyped<GiEnergiseProps, GiEnergiseEvents, GiEnergiseSlots> {
}
export {};
