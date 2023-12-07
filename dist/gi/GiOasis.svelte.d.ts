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
export type GiOasisProps = typeof __propDef.props;
export type GiOasisEvents = typeof __propDef.events;
export type GiOasisSlots = typeof __propDef.slots;
export default class GiOasis extends SvelteComponentTyped<GiOasisProps, GiOasisEvents, GiOasisSlots> {
}
export {};
