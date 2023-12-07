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
export type GiGearHammerProps = typeof __propDef.props;
export type GiGearHammerEvents = typeof __propDef.events;
export type GiGearHammerSlots = typeof __propDef.slots;
export default class GiGearHammer extends SvelteComponentTyped<GiGearHammerProps, GiGearHammerEvents, GiGearHammerSlots> {
}
export {};
