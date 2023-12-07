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
export type GiRoseProps = typeof __propDef.props;
export type GiRoseEvents = typeof __propDef.events;
export type GiRoseSlots = typeof __propDef.slots;
export default class GiRose extends SvelteComponentTyped<GiRoseProps, GiRoseEvents, GiRoseSlots> {
}
export {};
