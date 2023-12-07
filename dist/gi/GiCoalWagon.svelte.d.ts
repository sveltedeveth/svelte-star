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
export type GiCoalWagonProps = typeof __propDef.props;
export type GiCoalWagonEvents = typeof __propDef.events;
export type GiCoalWagonSlots = typeof __propDef.slots;
export default class GiCoalWagon extends SvelteComponentTyped<GiCoalWagonProps, GiCoalWagonEvents, GiCoalWagonSlots> {
}
export {};
