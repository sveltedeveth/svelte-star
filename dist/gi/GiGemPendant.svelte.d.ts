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
export type GiGemPendantProps = typeof __propDef.props;
export type GiGemPendantEvents = typeof __propDef.events;
export type GiGemPendantSlots = typeof __propDef.slots;
export default class GiGemPendant extends SvelteComponentTyped<GiGemPendantProps, GiGemPendantEvents, GiGemPendantSlots> {
}
export {};
