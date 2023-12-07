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
export type GiRaiseZombieProps = typeof __propDef.props;
export type GiRaiseZombieEvents = typeof __propDef.events;
export type GiRaiseZombieSlots = typeof __propDef.slots;
export default class GiRaiseZombie extends SvelteComponentTyped<GiRaiseZombieProps, GiRaiseZombieEvents, GiRaiseZombieSlots> {
}
export {};
