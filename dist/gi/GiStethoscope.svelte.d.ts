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
export type GiStethoscopeProps = typeof __propDef.props;
export type GiStethoscopeEvents = typeof __propDef.events;
export type GiStethoscopeSlots = typeof __propDef.slots;
export default class GiStethoscope extends SvelteComponentTyped<GiStethoscopeProps, GiStethoscopeEvents, GiStethoscopeSlots> {
}
export {};
