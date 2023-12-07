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
export type IoMdHelpProps = typeof __propDef.props;
export type IoMdHelpEvents = typeof __propDef.events;
export type IoMdHelpSlots = typeof __propDef.slots;
export default class IoMdHelp extends SvelteComponentTyped<IoMdHelpProps, IoMdHelpEvents, IoMdHelpSlots> {
}
export {};
