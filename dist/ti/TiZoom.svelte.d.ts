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
export type TiZoomProps = typeof __propDef.props;
export type TiZoomEvents = typeof __propDef.events;
export type TiZoomSlots = typeof __propDef.slots;
export default class TiZoom extends SvelteComponentTyped<TiZoomProps, TiZoomEvents, TiZoomSlots> {
}
export {};
