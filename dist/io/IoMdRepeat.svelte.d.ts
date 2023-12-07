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
export type IoMdRepeatProps = typeof __propDef.props;
export type IoMdRepeatEvents = typeof __propDef.events;
export type IoMdRepeatSlots = typeof __propDef.slots;
export default class IoMdRepeat extends SvelteComponentTyped<IoMdRepeatProps, IoMdRepeatEvents, IoMdRepeatSlots> {
}
export {};
