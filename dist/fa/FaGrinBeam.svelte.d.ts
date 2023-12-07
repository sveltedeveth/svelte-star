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
export type FaGrinBeamProps = typeof __propDef.props;
export type FaGrinBeamEvents = typeof __propDef.events;
export type FaGrinBeamSlots = typeof __propDef.slots;
export default class FaGrinBeam extends SvelteComponentTyped<FaGrinBeamProps, FaGrinBeamEvents, FaGrinBeamSlots> {
}
export {};
