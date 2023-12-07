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
export type GiHornInternalProps = typeof __propDef.props;
export type GiHornInternalEvents = typeof __propDef.events;
export type GiHornInternalSlots = typeof __propDef.slots;
export default class GiHornInternal extends SvelteComponentTyped<GiHornInternalProps, GiHornInternalEvents, GiHornInternalSlots> {
}
export {};
