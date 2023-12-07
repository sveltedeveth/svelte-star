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
export type MdTrendingFlatProps = typeof __propDef.props;
export type MdTrendingFlatEvents = typeof __propDef.events;
export type MdTrendingFlatSlots = typeof __propDef.slots;
export default class MdTrendingFlat extends SvelteComponentTyped<MdTrendingFlatProps, MdTrendingFlatEvents, MdTrendingFlatSlots> {
}
export {};
