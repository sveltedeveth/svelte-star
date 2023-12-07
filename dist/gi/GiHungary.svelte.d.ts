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
export type GiHungaryProps = typeof __propDef.props;
export type GiHungaryEvents = typeof __propDef.events;
export type GiHungarySlots = typeof __propDef.slots;
export default class GiHungary extends SvelteComponentTyped<GiHungaryProps, GiHungaryEvents, GiHungarySlots> {
}
export {};
