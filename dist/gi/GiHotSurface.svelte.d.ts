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
export type GiHotSurfaceProps = typeof __propDef.props;
export type GiHotSurfaceEvents = typeof __propDef.events;
export type GiHotSurfaceSlots = typeof __propDef.slots;
export default class GiHotSurface extends SvelteComponentTyped<GiHotSurfaceProps, GiHotSurfaceEvents, GiHotSurfaceSlots> {
}
export {};
