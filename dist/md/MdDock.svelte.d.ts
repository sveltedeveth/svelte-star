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
export type MdDockProps = typeof __propDef.props;
export type MdDockEvents = typeof __propDef.events;
export type MdDockSlots = typeof __propDef.slots;
export default class MdDock extends SvelteComponentTyped<MdDockProps, MdDockEvents, MdDockSlots> {
}
export {};
