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
export type GiPuppetProps = typeof __propDef.props;
export type GiPuppetEvents = typeof __propDef.events;
export type GiPuppetSlots = typeof __propDef.slots;
export default class GiPuppet extends SvelteComponentTyped<GiPuppetProps, GiPuppetEvents, GiPuppetSlots> {
}
export {};
