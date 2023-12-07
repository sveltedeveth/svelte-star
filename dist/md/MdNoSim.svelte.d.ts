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
export type MdNoSimProps = typeof __propDef.props;
export type MdNoSimEvents = typeof __propDef.events;
export type MdNoSimSlots = typeof __propDef.slots;
export default class MdNoSim extends SvelteComponentTyped<MdNoSimProps, MdNoSimEvents, MdNoSimSlots> {
}
export {};
