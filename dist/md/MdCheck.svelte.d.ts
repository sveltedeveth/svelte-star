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
export type MdCheckProps = typeof __propDef.props;
export type MdCheckEvents = typeof __propDef.events;
export type MdCheckSlots = typeof __propDef.slots;
export default class MdCheck extends SvelteComponentTyped<MdCheckProps, MdCheckEvents, MdCheckSlots> {
}
export {};
