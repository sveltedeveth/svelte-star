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
export type MdCreateProps = typeof __propDef.props;
export type MdCreateEvents = typeof __propDef.events;
export type MdCreateSlots = typeof __propDef.slots;
export default class MdCreate extends SvelteComponentTyped<MdCreateProps, MdCreateEvents, MdCreateSlots> {
}
export {};
