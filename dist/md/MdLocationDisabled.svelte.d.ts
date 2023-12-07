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
export type MdLocationDisabledProps = typeof __propDef.props;
export type MdLocationDisabledEvents = typeof __propDef.events;
export type MdLocationDisabledSlots = typeof __propDef.slots;
export default class MdLocationDisabled extends SvelteComponentTyped<MdLocationDisabledProps, MdLocationDisabledEvents, MdLocationDisabledSlots> {
}
export {};
