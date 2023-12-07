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
export type IoMdWarningProps = typeof __propDef.props;
export type IoMdWarningEvents = typeof __propDef.events;
export type IoMdWarningSlots = typeof __propDef.slots;
export default class IoMdWarning extends SvelteComponentTyped<IoMdWarningProps, IoMdWarningEvents, IoMdWarningSlots> {
}
export {};
