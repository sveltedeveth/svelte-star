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
export type IoMdGlobeProps = typeof __propDef.props;
export type IoMdGlobeEvents = typeof __propDef.events;
export type IoMdGlobeSlots = typeof __propDef.slots;
export default class IoMdGlobe extends SvelteComponentTyped<IoMdGlobeProps, IoMdGlobeEvents, IoMdGlobeSlots> {
}
export {};
