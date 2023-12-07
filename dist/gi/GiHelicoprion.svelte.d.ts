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
export type GiHelicoprionProps = typeof __propDef.props;
export type GiHelicoprionEvents = typeof __propDef.events;
export type GiHelicoprionSlots = typeof __propDef.slots;
export default class GiHelicoprion extends SvelteComponentTyped<GiHelicoprionProps, GiHelicoprionEvents, GiHelicoprionSlots> {
}
export {};
