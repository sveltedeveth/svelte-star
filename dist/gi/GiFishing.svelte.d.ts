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
export type GiFishingProps = typeof __propDef.props;
export type GiFishingEvents = typeof __propDef.events;
export type GiFishingSlots = typeof __propDef.slots;
export default class GiFishing extends SvelteComponentTyped<GiFishingProps, GiFishingEvents, GiFishingSlots> {
}
export {};
