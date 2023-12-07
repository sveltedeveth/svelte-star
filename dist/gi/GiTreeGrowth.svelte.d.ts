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
export type GiTreeGrowthProps = typeof __propDef.props;
export type GiTreeGrowthEvents = typeof __propDef.events;
export type GiTreeGrowthSlots = typeof __propDef.slots;
export default class GiTreeGrowth extends SvelteComponentTyped<GiTreeGrowthProps, GiTreeGrowthEvents, GiTreeGrowthSlots> {
}
export {};
