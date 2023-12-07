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
export type GiToolboxProps = typeof __propDef.props;
export type GiToolboxEvents = typeof __propDef.events;
export type GiToolboxSlots = typeof __propDef.slots;
export default class GiToolbox extends SvelteComponentTyped<GiToolboxProps, GiToolboxEvents, GiToolboxSlots> {
}
export {};
