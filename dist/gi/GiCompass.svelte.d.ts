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
export type GiCompassProps = typeof __propDef.props;
export type GiCompassEvents = typeof __propDef.events;
export type GiCompassSlots = typeof __propDef.slots;
export default class GiCompass extends SvelteComponentTyped<GiCompassProps, GiCompassEvents, GiCompassSlots> {
}
export {};
