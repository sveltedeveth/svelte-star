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
export type GiStunGrenadeProps = typeof __propDef.props;
export type GiStunGrenadeEvents = typeof __propDef.events;
export type GiStunGrenadeSlots = typeof __propDef.slots;
export default class GiStunGrenade extends SvelteComponentTyped<GiStunGrenadeProps, GiStunGrenadeEvents, GiStunGrenadeSlots> {
}
export {};
