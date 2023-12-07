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
export type GiCragsProps = typeof __propDef.props;
export type GiCragsEvents = typeof __propDef.events;
export type GiCragsSlots = typeof __propDef.slots;
export default class GiCrags extends SvelteComponentTyped<GiCragsProps, GiCragsEvents, GiCragsSlots> {
}
export {};
