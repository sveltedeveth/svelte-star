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
export type GiStairsProps = typeof __propDef.props;
export type GiStairsEvents = typeof __propDef.events;
export type GiStairsSlots = typeof __propDef.slots;
export default class GiStairs extends SvelteComponentTyped<GiStairsProps, GiStairsEvents, GiStairsSlots> {
}
export {};
