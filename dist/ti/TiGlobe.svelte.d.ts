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
export type TiGlobeProps = typeof __propDef.props;
export type TiGlobeEvents = typeof __propDef.events;
export type TiGlobeSlots = typeof __propDef.slots;
export default class TiGlobe extends SvelteComponentTyped<TiGlobeProps, TiGlobeEvents, TiGlobeSlots> {
}
export {};
