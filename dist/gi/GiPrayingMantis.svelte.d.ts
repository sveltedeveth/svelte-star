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
export type GiPrayingMantisProps = typeof __propDef.props;
export type GiPrayingMantisEvents = typeof __propDef.events;
export type GiPrayingMantisSlots = typeof __propDef.slots;
export default class GiPrayingMantis extends SvelteComponentTyped<GiPrayingMantisProps, GiPrayingMantisEvents, GiPrayingMantisSlots> {
}
export {};
