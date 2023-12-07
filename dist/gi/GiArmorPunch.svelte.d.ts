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
export type GiArmorPunchProps = typeof __propDef.props;
export type GiArmorPunchEvents = typeof __propDef.events;
export type GiArmorPunchSlots = typeof __propDef.slots;
export default class GiArmorPunch extends SvelteComponentTyped<GiArmorPunchProps, GiArmorPunchEvents, GiArmorPunchSlots> {
}
export {};
