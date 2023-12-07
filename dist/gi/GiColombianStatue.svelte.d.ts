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
export type GiColombianStatueProps = typeof __propDef.props;
export type GiColombianStatueEvents = typeof __propDef.events;
export type GiColombianStatueSlots = typeof __propDef.slots;
export default class GiColombianStatue extends SvelteComponentTyped<GiColombianStatueProps, GiColombianStatueEvents, GiColombianStatueSlots> {
}
export {};
