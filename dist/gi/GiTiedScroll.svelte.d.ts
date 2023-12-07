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
export type GiTiedScrollProps = typeof __propDef.props;
export type GiTiedScrollEvents = typeof __propDef.events;
export type GiTiedScrollSlots = typeof __propDef.slots;
export default class GiTiedScroll extends SvelteComponentTyped<GiTiedScrollProps, GiTiedScrollEvents, GiTiedScrollSlots> {
}
export {};
