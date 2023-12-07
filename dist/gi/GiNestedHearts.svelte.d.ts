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
export type GiNestedHeartsProps = typeof __propDef.props;
export type GiNestedHeartsEvents = typeof __propDef.events;
export type GiNestedHeartsSlots = typeof __propDef.slots;
export default class GiNestedHearts extends SvelteComponentTyped<GiNestedHeartsProps, GiNestedHeartsEvents, GiNestedHeartsSlots> {
}
export {};
