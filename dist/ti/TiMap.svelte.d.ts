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
export type TiMapProps = typeof __propDef.props;
export type TiMapEvents = typeof __propDef.events;
export type TiMapSlots = typeof __propDef.slots;
export default class TiMap extends SvelteComponentTyped<TiMapProps, TiMapEvents, TiMapSlots> {
}
export {};
