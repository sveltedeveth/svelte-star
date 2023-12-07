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
export type TiCompassProps = typeof __propDef.props;
export type TiCompassEvents = typeof __propDef.events;
export type TiCompassSlots = typeof __propDef.slots;
export default class TiCompass extends SvelteComponentTyped<TiCompassProps, TiCompassEvents, TiCompassSlots> {
}
export {};
