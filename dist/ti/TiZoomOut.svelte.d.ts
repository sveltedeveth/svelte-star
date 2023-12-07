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
export type TiZoomOutProps = typeof __propDef.props;
export type TiZoomOutEvents = typeof __propDef.events;
export type TiZoomOutSlots = typeof __propDef.slots;
export default class TiZoomOut extends SvelteComponentTyped<TiZoomOutProps, TiZoomOutEvents, TiZoomOutSlots> {
}
export {};
