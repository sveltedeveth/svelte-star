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
export type MdFindReplaceProps = typeof __propDef.props;
export type MdFindReplaceEvents = typeof __propDef.events;
export type MdFindReplaceSlots = typeof __propDef.slots;
export default class MdFindReplace extends SvelteComponentTyped<MdFindReplaceProps, MdFindReplaceEvents, MdFindReplaceSlots> {
}
export {};
