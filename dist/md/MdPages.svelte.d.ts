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
export type MdPagesProps = typeof __propDef.props;
export type MdPagesEvents = typeof __propDef.events;
export type MdPagesSlots = typeof __propDef.slots;
export default class MdPages extends SvelteComponentTyped<MdPagesProps, MdPagesEvents, MdPagesSlots> {
}
export {};
