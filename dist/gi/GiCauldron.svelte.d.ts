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
export type GiCauldronProps = typeof __propDef.props;
export type GiCauldronEvents = typeof __propDef.events;
export type GiCauldronSlots = typeof __propDef.slots;
export default class GiCauldron extends SvelteComponentTyped<GiCauldronProps, GiCauldronEvents, GiCauldronSlots> {
}
export {};
