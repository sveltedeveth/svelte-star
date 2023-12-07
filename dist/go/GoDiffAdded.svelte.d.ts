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
export type GoDiffAddedProps = typeof __propDef.props;
export type GoDiffAddedEvents = typeof __propDef.events;
export type GoDiffAddedSlots = typeof __propDef.slots;
export default class GoDiffAdded extends SvelteComponentTyped<GoDiffAddedProps, GoDiffAddedEvents, GoDiffAddedSlots> {
}
export {};
