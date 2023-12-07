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
export type MdNotInterestedProps = typeof __propDef.props;
export type MdNotInterestedEvents = typeof __propDef.events;
export type MdNotInterestedSlots = typeof __propDef.slots;
export default class MdNotInterested extends SvelteComponentTyped<MdNotInterestedProps, MdNotInterestedEvents, MdNotInterestedSlots> {
}
export {};
