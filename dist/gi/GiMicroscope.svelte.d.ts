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
export type GiMicroscopeProps = typeof __propDef.props;
export type GiMicroscopeEvents = typeof __propDef.events;
export type GiMicroscopeSlots = typeof __propDef.slots;
export default class GiMicroscope extends SvelteComponentTyped<GiMicroscopeProps, GiMicroscopeEvents, GiMicroscopeSlots> {
}
export {};
