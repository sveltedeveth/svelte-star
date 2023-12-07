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
export type GiCogsplosionProps = typeof __propDef.props;
export type GiCogsplosionEvents = typeof __propDef.events;
export type GiCogsplosionSlots = typeof __propDef.slots;
export default class GiCogsplosion extends SvelteComponentTyped<GiCogsplosionProps, GiCogsplosionEvents, GiCogsplosionSlots> {
}
export {};
