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
export type GiTrebuchetProps = typeof __propDef.props;
export type GiTrebuchetEvents = typeof __propDef.events;
export type GiTrebuchetSlots = typeof __propDef.slots;
export default class GiTrebuchet extends SvelteComponentTyped<GiTrebuchetProps, GiTrebuchetEvents, GiTrebuchetSlots> {
}
export {};
