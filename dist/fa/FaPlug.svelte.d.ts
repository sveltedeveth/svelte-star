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
export type FaPlugProps = typeof __propDef.props;
export type FaPlugEvents = typeof __propDef.events;
export type FaPlugSlots = typeof __propDef.slots;
export default class FaPlug extends SvelteComponentTyped<FaPlugProps, FaPlugEvents, FaPlugSlots> {
}
export {};
