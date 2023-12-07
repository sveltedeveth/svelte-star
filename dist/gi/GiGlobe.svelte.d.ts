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
export type GiGlobeProps = typeof __propDef.props;
export type GiGlobeEvents = typeof __propDef.events;
export type GiGlobeSlots = typeof __propDef.slots;
export default class GiGlobe extends SvelteComponentTyped<GiGlobeProps, GiGlobeEvents, GiGlobeSlots> {
}
export {};
