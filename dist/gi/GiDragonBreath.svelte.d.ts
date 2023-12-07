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
export type GiDragonBreathProps = typeof __propDef.props;
export type GiDragonBreathEvents = typeof __propDef.events;
export type GiDragonBreathSlots = typeof __propDef.slots;
export default class GiDragonBreath extends SvelteComponentTyped<GiDragonBreathProps, GiDragonBreathEvents, GiDragonBreathSlots> {
}
export {};
