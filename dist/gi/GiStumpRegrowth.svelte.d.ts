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
export type GiStumpRegrowthProps = typeof __propDef.props;
export type GiStumpRegrowthEvents = typeof __propDef.events;
export type GiStumpRegrowthSlots = typeof __propDef.slots;
export default class GiStumpRegrowth extends SvelteComponentTyped<GiStumpRegrowthProps, GiStumpRegrowthEvents, GiStumpRegrowthSlots> {
}
export {};
