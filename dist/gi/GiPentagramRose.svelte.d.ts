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
export type GiPentagramRoseProps = typeof __propDef.props;
export type GiPentagramRoseEvents = typeof __propDef.events;
export type GiPentagramRoseSlots = typeof __propDef.slots;
export default class GiPentagramRose extends SvelteComponentTyped<GiPentagramRoseProps, GiPentagramRoseEvents, GiPentagramRoseSlots> {
}
export {};
