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
export type FaCompassProps = typeof __propDef.props;
export type FaCompassEvents = typeof __propDef.events;
export type FaCompassSlots = typeof __propDef.slots;
export default class FaCompass extends SvelteComponentTyped<FaCompassProps, FaCompassEvents, FaCompassSlots> {
}
export {};
