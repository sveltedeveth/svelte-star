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
export type FaRegCompassProps = typeof __propDef.props;
export type FaRegCompassEvents = typeof __propDef.events;
export type FaRegCompassSlots = typeof __propDef.slots;
export default class FaRegCompass extends SvelteComponentTyped<FaRegCompassProps, FaRegCompassEvents, FaRegCompassSlots> {
}
export {};
