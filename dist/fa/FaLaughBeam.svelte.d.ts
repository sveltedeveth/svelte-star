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
export type FaLaughBeamProps = typeof __propDef.props;
export type FaLaughBeamEvents = typeof __propDef.events;
export type FaLaughBeamSlots = typeof __propDef.slots;
export default class FaLaughBeam extends SvelteComponentTyped<FaLaughBeamProps, FaLaughBeamEvents, FaLaughBeamSlots> {
}
export {};
