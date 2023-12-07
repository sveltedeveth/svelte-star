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
export type GiThorFistProps = typeof __propDef.props;
export type GiThorFistEvents = typeof __propDef.events;
export type GiThorFistSlots = typeof __propDef.slots;
export default class GiThorFist extends SvelteComponentTyped<GiThorFistProps, GiThorFistEvents, GiThorFistSlots> {
}
export {};
