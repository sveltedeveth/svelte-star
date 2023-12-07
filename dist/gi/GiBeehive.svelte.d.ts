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
export type GiBeehiveProps = typeof __propDef.props;
export type GiBeehiveEvents = typeof __propDef.events;
export type GiBeehiveSlots = typeof __propDef.slots;
export default class GiBeehive extends SvelteComponentTyped<GiBeehiveProps, GiBeehiveEvents, GiBeehiveSlots> {
}
export {};
