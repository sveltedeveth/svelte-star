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
export type FaCentercodeProps = typeof __propDef.props;
export type FaCentercodeEvents = typeof __propDef.events;
export type FaCentercodeSlots = typeof __propDef.slots;
export default class FaCentercode extends SvelteComponentTyped<FaCentercodeProps, FaCentercodeEvents, FaCentercodeSlots> {
}
export {};
