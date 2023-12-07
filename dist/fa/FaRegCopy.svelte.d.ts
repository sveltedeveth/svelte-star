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
export type FaRegCopyProps = typeof __propDef.props;
export type FaRegCopyEvents = typeof __propDef.events;
export type FaRegCopySlots = typeof __propDef.slots;
export default class FaRegCopy extends SvelteComponentTyped<FaRegCopyProps, FaRegCopyEvents, FaRegCopySlots> {
}
export {};
