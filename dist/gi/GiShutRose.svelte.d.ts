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
export type GiShutRoseProps = typeof __propDef.props;
export type GiShutRoseEvents = typeof __propDef.events;
export type GiShutRoseSlots = typeof __propDef.slots;
export default class GiShutRose extends SvelteComponentTyped<GiShutRoseProps, GiShutRoseEvents, GiShutRoseSlots> {
}
export {};
