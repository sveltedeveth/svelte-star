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
export type MdGridOnProps = typeof __propDef.props;
export type MdGridOnEvents = typeof __propDef.events;
export type MdGridOnSlots = typeof __propDef.slots;
export default class MdGridOn extends SvelteComponentTyped<MdGridOnProps, MdGridOnEvents, MdGridOnSlots> {
}
export {};
