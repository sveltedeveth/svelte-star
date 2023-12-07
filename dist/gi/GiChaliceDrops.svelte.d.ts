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
export type GiChaliceDropsProps = typeof __propDef.props;
export type GiChaliceDropsEvents = typeof __propDef.events;
export type GiChaliceDropsSlots = typeof __propDef.slots;
export default class GiChaliceDrops extends SvelteComponentTyped<GiChaliceDropsProps, GiChaliceDropsEvents, GiChaliceDropsSlots> {
}
export {};
