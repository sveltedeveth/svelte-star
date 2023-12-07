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
export type GiSnatchProps = typeof __propDef.props;
export type GiSnatchEvents = typeof __propDef.events;
export type GiSnatchSlots = typeof __propDef.slots;
export default class GiSnatch extends SvelteComponentTyped<GiSnatchProps, GiSnatchEvents, GiSnatchSlots> {
}
export {};
