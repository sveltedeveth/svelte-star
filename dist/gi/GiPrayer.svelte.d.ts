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
export type GiPrayerProps = typeof __propDef.props;
export type GiPrayerEvents = typeof __propDef.events;
export type GiPrayerSlots = typeof __propDef.slots;
export default class GiPrayer extends SvelteComponentTyped<GiPrayerProps, GiPrayerEvents, GiPrayerSlots> {
}
export {};
