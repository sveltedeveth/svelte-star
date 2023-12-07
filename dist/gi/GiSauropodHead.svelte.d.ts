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
export type GiSauropodHeadProps = typeof __propDef.props;
export type GiSauropodHeadEvents = typeof __propDef.events;
export type GiSauropodHeadSlots = typeof __propDef.slots;
export default class GiSauropodHead extends SvelteComponentTyped<GiSauropodHeadProps, GiSauropodHeadEvents, GiSauropodHeadSlots> {
}
export {};
