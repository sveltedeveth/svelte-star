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
export type GiPrayerBeadsProps = typeof __propDef.props;
export type GiPrayerBeadsEvents = typeof __propDef.events;
export type GiPrayerBeadsSlots = typeof __propDef.slots;
export default class GiPrayerBeads extends SvelteComponentTyped<GiPrayerBeadsProps, GiPrayerBeadsEvents, GiPrayerBeadsSlots> {
}
export {};
