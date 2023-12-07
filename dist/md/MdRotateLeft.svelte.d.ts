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
export type MdRotateLeftProps = typeof __propDef.props;
export type MdRotateLeftEvents = typeof __propDef.events;
export type MdRotateLeftSlots = typeof __propDef.slots;
export default class MdRotateLeft extends SvelteComponentTyped<MdRotateLeftProps, MdRotateLeftEvents, MdRotateLeftSlots> {
}
export {};
