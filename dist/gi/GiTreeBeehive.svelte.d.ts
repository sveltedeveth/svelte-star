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
export type GiTreeBeehiveProps = typeof __propDef.props;
export type GiTreeBeehiveEvents = typeof __propDef.events;
export type GiTreeBeehiveSlots = typeof __propDef.slots;
export default class GiTreeBeehive extends SvelteComponentTyped<GiTreeBeehiveProps, GiTreeBeehiveEvents, GiTreeBeehiveSlots> {
}
export {};
