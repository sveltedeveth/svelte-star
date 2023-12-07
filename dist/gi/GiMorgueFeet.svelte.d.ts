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
export type GiMorgueFeetProps = typeof __propDef.props;
export type GiMorgueFeetEvents = typeof __propDef.events;
export type GiMorgueFeetSlots = typeof __propDef.slots;
export default class GiMorgueFeet extends SvelteComponentTyped<GiMorgueFeetProps, GiMorgueFeetEvents, GiMorgueFeetSlots> {
}
export {};
