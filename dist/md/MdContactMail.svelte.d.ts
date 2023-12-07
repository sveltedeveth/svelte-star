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
export type MdContactMailProps = typeof __propDef.props;
export type MdContactMailEvents = typeof __propDef.events;
export type MdContactMailSlots = typeof __propDef.slots;
export default class MdContactMail extends SvelteComponentTyped<MdContactMailProps, MdContactMailEvents, MdContactMailSlots> {
}
export {};
