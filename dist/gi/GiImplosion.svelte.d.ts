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
export type GiImplosionProps = typeof __propDef.props;
export type GiImplosionEvents = typeof __propDef.events;
export type GiImplosionSlots = typeof __propDef.slots;
export default class GiImplosion extends SvelteComponentTyped<GiImplosionProps, GiImplosionEvents, GiImplosionSlots> {
}
export {};
