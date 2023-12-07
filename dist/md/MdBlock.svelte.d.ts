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
export type MdBlockProps = typeof __propDef.props;
export type MdBlockEvents = typeof __propDef.events;
export type MdBlockSlots = typeof __propDef.slots;
export default class MdBlock extends SvelteComponentTyped<MdBlockProps, MdBlockEvents, MdBlockSlots> {
}
export {};
