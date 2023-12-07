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
export type MdLocalAtmProps = typeof __propDef.props;
export type MdLocalAtmEvents = typeof __propDef.events;
export type MdLocalAtmSlots = typeof __propDef.slots;
export default class MdLocalAtm extends SvelteComponentTyped<MdLocalAtmProps, MdLocalAtmEvents, MdLocalAtmSlots> {
}
export {};
