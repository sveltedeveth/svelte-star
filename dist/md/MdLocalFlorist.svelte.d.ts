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
export type MdLocalFloristProps = typeof __propDef.props;
export type MdLocalFloristEvents = typeof __propDef.events;
export type MdLocalFloristSlots = typeof __propDef.slots;
export default class MdLocalFlorist extends SvelteComponentTyped<MdLocalFloristProps, MdLocalFloristEvents, MdLocalFloristSlots> {
}
export {};
