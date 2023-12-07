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
export type MdSkipPreviousProps = typeof __propDef.props;
export type MdSkipPreviousEvents = typeof __propDef.events;
export type MdSkipPreviousSlots = typeof __propDef.slots;
export default class MdSkipPrevious extends SvelteComponentTyped<MdSkipPreviousProps, MdSkipPreviousEvents, MdSkipPreviousSlots> {
}
export {};
