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
export type GiDaggerRoseProps = typeof __propDef.props;
export type GiDaggerRoseEvents = typeof __propDef.events;
export type GiDaggerRoseSlots = typeof __propDef.slots;
export default class GiDaggerRose extends SvelteComponentTyped<GiDaggerRoseProps, GiDaggerRoseEvents, GiDaggerRoseSlots> {
}
export {};
