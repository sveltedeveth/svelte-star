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
export type GiSelectProps = typeof __propDef.props;
export type GiSelectEvents = typeof __propDef.events;
export type GiSelectSlots = typeof __propDef.slots;
export default class GiSelect extends SvelteComponentTyped<GiSelectProps, GiSelectEvents, GiSelectSlots> {
}
export {};
