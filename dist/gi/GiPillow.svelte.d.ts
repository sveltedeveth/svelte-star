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
export type GiPillowProps = typeof __propDef.props;
export type GiPillowEvents = typeof __propDef.events;
export type GiPillowSlots = typeof __propDef.slots;
export default class GiPillow extends SvelteComponentTyped<GiPillowProps, GiPillowEvents, GiPillowSlots> {
}
export {};
