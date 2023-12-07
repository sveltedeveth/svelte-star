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
export type MdWarningProps = typeof __propDef.props;
export type MdWarningEvents = typeof __propDef.events;
export type MdWarningSlots = typeof __propDef.slots;
export default class MdWarning extends SvelteComponentTyped<MdWarningProps, MdWarningEvents, MdWarningSlots> {
}
export {};
