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
export type IoMdTransgenderProps = typeof __propDef.props;
export type IoMdTransgenderEvents = typeof __propDef.events;
export type IoMdTransgenderSlots = typeof __propDef.slots;
export default class IoMdTransgender extends SvelteComponentTyped<IoMdTransgenderProps, IoMdTransgenderEvents, IoMdTransgenderSlots> {
}
export {};
