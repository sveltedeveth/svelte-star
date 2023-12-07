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
export type MdLiveHelpProps = typeof __propDef.props;
export type MdLiveHelpEvents = typeof __propDef.events;
export type MdLiveHelpSlots = typeof __propDef.slots;
export default class MdLiveHelp extends SvelteComponentTyped<MdLiveHelpProps, MdLiveHelpEvents, MdLiveHelpSlots> {
}
export {};
