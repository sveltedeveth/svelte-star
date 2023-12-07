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
export type FaMicroscopeProps = typeof __propDef.props;
export type FaMicroscopeEvents = typeof __propDef.events;
export type FaMicroscopeSlots = typeof __propDef.slots;
export default class FaMicroscope extends SvelteComponentTyped<FaMicroscopeProps, FaMicroscopeEvents, FaMicroscopeSlots> {
}
export {};
