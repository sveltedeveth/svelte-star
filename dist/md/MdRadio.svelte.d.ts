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
export type MdRadioProps = typeof __propDef.props;
export type MdRadioEvents = typeof __propDef.events;
export type MdRadioSlots = typeof __propDef.slots;
export default class MdRadio extends SvelteComponentTyped<MdRadioProps, MdRadioEvents, MdRadioSlots> {
}
export {};
