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
export type IoMdCompassProps = typeof __propDef.props;
export type IoMdCompassEvents = typeof __propDef.events;
export type IoMdCompassSlots = typeof __propDef.slots;
export default class IoMdCompass extends SvelteComponentTyped<IoMdCompassProps, IoMdCompassEvents, IoMdCompassSlots> {
}
export {};
