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
export type GiWireframeGlobeProps = typeof __propDef.props;
export type GiWireframeGlobeEvents = typeof __propDef.events;
export type GiWireframeGlobeSlots = typeof __propDef.slots;
export default class GiWireframeGlobe extends SvelteComponentTyped<GiWireframeGlobeProps, GiWireframeGlobeEvents, GiWireframeGlobeSlots> {
}
export {};
