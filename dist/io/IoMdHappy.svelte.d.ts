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
export type IoMdHappyProps = typeof __propDef.props;
export type IoMdHappyEvents = typeof __propDef.events;
export type IoMdHappySlots = typeof __propDef.slots;
export default class IoMdHappy extends SvelteComponentTyped<IoMdHappyProps, IoMdHappyEvents, IoMdHappySlots> {
}
export {};
