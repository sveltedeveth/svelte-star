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
export type MdWcProps = typeof __propDef.props;
export type MdWcEvents = typeof __propDef.events;
export type MdWcSlots = typeof __propDef.slots;
export default class MdWc extends SvelteComponentTyped<MdWcProps, MdWcEvents, MdWcSlots> {
}
export {};
