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
export type GiStickSplittingProps = typeof __propDef.props;
export type GiStickSplittingEvents = typeof __propDef.events;
export type GiStickSplittingSlots = typeof __propDef.slots;
export default class GiStickSplitting extends SvelteComponentTyped<GiStickSplittingProps, GiStickSplittingEvents, GiStickSplittingSlots> {
}
export {};
