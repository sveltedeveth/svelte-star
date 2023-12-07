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
export type GiFClefProps = typeof __propDef.props;
export type GiFClefEvents = typeof __propDef.events;
export type GiFClefSlots = typeof __propDef.slots;
export default class GiFClef extends SvelteComponentTyped<GiFClefProps, GiFClefEvents, GiFClefSlots> {
}
export {};
