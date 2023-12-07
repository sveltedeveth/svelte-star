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
export type FaSmileBeamProps = typeof __propDef.props;
export type FaSmileBeamEvents = typeof __propDef.events;
export type FaSmileBeamSlots = typeof __propDef.slots;
export default class FaSmileBeam extends SvelteComponentTyped<FaSmileBeamProps, FaSmileBeamEvents, FaSmileBeamSlots> {
}
export {};
