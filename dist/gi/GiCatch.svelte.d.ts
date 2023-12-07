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
export type GiCatchProps = typeof __propDef.props;
export type GiCatchEvents = typeof __propDef.events;
export type GiCatchSlots = typeof __propDef.slots;
export default class GiCatch extends SvelteComponentTyped<GiCatchProps, GiCatchEvents, GiCatchSlots> {
}
export {};
