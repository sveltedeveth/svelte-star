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
export type FaAccusoftProps = typeof __propDef.props;
export type FaAccusoftEvents = typeof __propDef.events;
export type FaAccusoftSlots = typeof __propDef.slots;
export default class FaAccusoft extends SvelteComponentTyped<FaAccusoftProps, FaAccusoftEvents, FaAccusoftSlots> {
}
export {};
