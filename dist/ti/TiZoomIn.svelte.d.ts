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
export type TiZoomInProps = typeof __propDef.props;
export type TiZoomInEvents = typeof __propDef.events;
export type TiZoomInSlots = typeof __propDef.slots;
export default class TiZoomIn extends SvelteComponentTyped<TiZoomInProps, TiZoomInEvents, TiZoomInSlots> {
}
export {};
