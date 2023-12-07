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
export type GiWateringCanProps = typeof __propDef.props;
export type GiWateringCanEvents = typeof __propDef.events;
export type GiWateringCanSlots = typeof __propDef.slots;
export default class GiWateringCan extends SvelteComponentTyped<GiWateringCanProps, GiWateringCanEvents, GiWateringCanSlots> {
}
export {};
