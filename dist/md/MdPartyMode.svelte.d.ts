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
export type MdPartyModeProps = typeof __propDef.props;
export type MdPartyModeEvents = typeof __propDef.events;
export type MdPartyModeSlots = typeof __propDef.slots;
export default class MdPartyMode extends SvelteComponentTyped<MdPartyModeProps, MdPartyModeEvents, MdPartyModeSlots> {
}
export {};
