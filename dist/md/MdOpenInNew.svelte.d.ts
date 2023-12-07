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
export type MdOpenInNewProps = typeof __propDef.props;
export type MdOpenInNewEvents = typeof __propDef.events;
export type MdOpenInNewSlots = typeof __propDef.slots;
export default class MdOpenInNew extends SvelteComponentTyped<MdOpenInNewProps, MdOpenInNewEvents, MdOpenInNewSlots> {
}
export {};
