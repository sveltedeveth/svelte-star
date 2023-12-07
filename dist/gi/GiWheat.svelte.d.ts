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
export type GiWheatProps = typeof __propDef.props;
export type GiWheatEvents = typeof __propDef.events;
export type GiWheatSlots = typeof __propDef.slots;
export default class GiWheat extends SvelteComponentTyped<GiWheatProps, GiWheatEvents, GiWheatSlots> {
}
export {};
