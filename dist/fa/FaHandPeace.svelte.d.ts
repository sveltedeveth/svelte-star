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
export type FaHandPeaceProps = typeof __propDef.props;
export type FaHandPeaceEvents = typeof __propDef.events;
export type FaHandPeaceSlots = typeof __propDef.slots;
export default class FaHandPeace extends SvelteComponentTyped<FaHandPeaceProps, FaHandPeaceEvents, FaHandPeaceSlots> {
}
export {};
