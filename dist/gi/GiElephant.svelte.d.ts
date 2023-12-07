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
export type GiElephantProps = typeof __propDef.props;
export type GiElephantEvents = typeof __propDef.events;
export type GiElephantSlots = typeof __propDef.slots;
export default class GiElephant extends SvelteComponentTyped<GiElephantProps, GiElephantEvents, GiElephantSlots> {
}
export {};
