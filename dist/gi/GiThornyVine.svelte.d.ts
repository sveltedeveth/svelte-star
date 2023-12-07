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
export type GiThornyVineProps = typeof __propDef.props;
export type GiThornyVineEvents = typeof __propDef.events;
export type GiThornyVineSlots = typeof __propDef.slots;
export default class GiThornyVine extends SvelteComponentTyped<GiThornyVineProps, GiThornyVineEvents, GiThornyVineSlots> {
}
export {};
