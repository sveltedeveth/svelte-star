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
export type GiGalleonProps = typeof __propDef.props;
export type GiGalleonEvents = typeof __propDef.events;
export type GiGalleonSlots = typeof __propDef.slots;
export default class GiGalleon extends SvelteComponentTyped<GiGalleonProps, GiGalleonEvents, GiGalleonSlots> {
}
export {};
