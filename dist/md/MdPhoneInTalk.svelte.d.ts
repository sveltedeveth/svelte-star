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
export type MdPhoneInTalkProps = typeof __propDef.props;
export type MdPhoneInTalkEvents = typeof __propDef.events;
export type MdPhoneInTalkSlots = typeof __propDef.slots;
export default class MdPhoneInTalk extends SvelteComponentTyped<MdPhoneInTalkProps, MdPhoneInTalkEvents, MdPhoneInTalkSlots> {
}
export {};
