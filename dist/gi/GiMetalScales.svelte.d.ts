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
export type GiMetalScalesProps = typeof __propDef.props;
export type GiMetalScalesEvents = typeof __propDef.events;
export type GiMetalScalesSlots = typeof __propDef.slots;
export default class GiMetalScales extends SvelteComponentTyped<GiMetalScalesProps, GiMetalScalesEvents, GiMetalScalesSlots> {
}
export {};
