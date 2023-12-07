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
export type MdTimeToLeaveProps = typeof __propDef.props;
export type MdTimeToLeaveEvents = typeof __propDef.events;
export type MdTimeToLeaveSlots = typeof __propDef.slots;
export default class MdTimeToLeave extends SvelteComponentTyped<MdTimeToLeaveProps, MdTimeToLeaveEvents, MdTimeToLeaveSlots> {
}
export {};
