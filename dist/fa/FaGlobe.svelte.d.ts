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
export type FaGlobeProps = typeof __propDef.props;
export type FaGlobeEvents = typeof __propDef.events;
export type FaGlobeSlots = typeof __propDef.slots;
export default class FaGlobe extends SvelteComponentTyped<FaGlobeProps, FaGlobeEvents, FaGlobeSlots> {
}
export {};
