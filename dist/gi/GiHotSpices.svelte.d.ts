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
export type GiHotSpicesProps = typeof __propDef.props;
export type GiHotSpicesEvents = typeof __propDef.events;
export type GiHotSpicesSlots = typeof __propDef.slots;
export default class GiHotSpices extends SvelteComponentTyped<GiHotSpicesProps, GiHotSpicesEvents, GiHotSpicesSlots> {
}
export {};
