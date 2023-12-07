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
export type FaKissBeamProps = typeof __propDef.props;
export type FaKissBeamEvents = typeof __propDef.events;
export type FaKissBeamSlots = typeof __propDef.slots;
export default class FaKissBeam extends SvelteComponentTyped<FaKissBeamProps, FaKissBeamEvents, FaKissBeamSlots> {
}
export {};
