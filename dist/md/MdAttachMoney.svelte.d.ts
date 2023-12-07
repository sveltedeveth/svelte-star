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
export type MdAttachMoneyProps = typeof __propDef.props;
export type MdAttachMoneyEvents = typeof __propDef.events;
export type MdAttachMoneySlots = typeof __propDef.slots;
export default class MdAttachMoney extends SvelteComponentTyped<MdAttachMoneyProps, MdAttachMoneyEvents, MdAttachMoneySlots> {
}
export {};
