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
export type GiCroissantProps = typeof __propDef.props;
export type GiCroissantEvents = typeof __propDef.events;
export type GiCroissantSlots = typeof __propDef.slots;
export default class GiCroissant extends SvelteComponentTyped<GiCroissantProps, GiCroissantEvents, GiCroissantSlots> {
}
export {};
