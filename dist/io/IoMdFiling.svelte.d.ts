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
export type IoMdFilingProps = typeof __propDef.props;
export type IoMdFilingEvents = typeof __propDef.events;
export type IoMdFilingSlots = typeof __propDef.slots;
export default class IoMdFiling extends SvelteComponentTyped<IoMdFilingProps, IoMdFilingEvents, IoMdFilingSlots> {
}
export {};
