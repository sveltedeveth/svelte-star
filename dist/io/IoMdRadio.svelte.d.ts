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
export type IoMdRadioProps = typeof __propDef.props;
export type IoMdRadioEvents = typeof __propDef.events;
export type IoMdRadioSlots = typeof __propDef.slots;
export default class IoMdRadio extends SvelteComponentTyped<IoMdRadioProps, IoMdRadioEvents, IoMdRadioSlots> {
}
export {};
