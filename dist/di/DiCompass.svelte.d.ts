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
export type DiCompassProps = typeof __propDef.props;
export type DiCompassEvents = typeof __propDef.events;
export type DiCompassSlots = typeof __propDef.slots;
export default class DiCompass extends SvelteComponentTyped<DiCompassProps, DiCompassEvents, DiCompassSlots> {
}
export {};
