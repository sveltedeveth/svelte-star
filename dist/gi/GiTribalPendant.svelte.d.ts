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
export type GiTribalPendantProps = typeof __propDef.props;
export type GiTribalPendantEvents = typeof __propDef.events;
export type GiTribalPendantSlots = typeof __propDef.slots;
export default class GiTribalPendant extends SvelteComponentTyped<GiTribalPendantProps, GiTribalPendantEvents, GiTribalPendantSlots> {
}
export {};
