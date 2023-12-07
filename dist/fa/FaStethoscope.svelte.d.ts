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
export type FaStethoscopeProps = typeof __propDef.props;
export type FaStethoscopeEvents = typeof __propDef.events;
export type FaStethoscopeSlots = typeof __propDef.slots;
export default class FaStethoscope extends SvelteComponentTyped<FaStethoscopeProps, FaStethoscopeEvents, FaStethoscopeSlots> {
}
export {};
