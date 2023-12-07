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
export type GiGroupedDropsProps = typeof __propDef.props;
export type GiGroupedDropsEvents = typeof __propDef.events;
export type GiGroupedDropsSlots = typeof __propDef.slots;
export default class GiGroupedDrops extends SvelteComponentTyped<GiGroupedDropsProps, GiGroupedDropsEvents, GiGroupedDropsSlots> {
}
export {};
