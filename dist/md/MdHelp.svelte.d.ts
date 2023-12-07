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
export type MdHelpProps = typeof __propDef.props;
export type MdHelpEvents = typeof __propDef.events;
export type MdHelpSlots = typeof __propDef.slots;
export default class MdHelp extends SvelteComponentTyped<MdHelpProps, MdHelpEvents, MdHelpSlots> {
}
export {};
