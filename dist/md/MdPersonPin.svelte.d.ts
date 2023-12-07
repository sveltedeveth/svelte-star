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
export type MdPersonPinProps = typeof __propDef.props;
export type MdPersonPinEvents = typeof __propDef.events;
export type MdPersonPinSlots = typeof __propDef.slots;
export default class MdPersonPin extends SvelteComponentTyped<MdPersonPinProps, MdPersonPinEvents, MdPersonPinSlots> {
}
export {};
