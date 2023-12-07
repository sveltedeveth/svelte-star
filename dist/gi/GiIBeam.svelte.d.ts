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
export type GiIBeamProps = typeof __propDef.props;
export type GiIBeamEvents = typeof __propDef.events;
export type GiIBeamSlots = typeof __propDef.slots;
export default class GiIBeam extends SvelteComponentTyped<GiIBeamProps, GiIBeamEvents, GiIBeamSlots> {
}
export {};
