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
export type MdRepeatProps = typeof __propDef.props;
export type MdRepeatEvents = typeof __propDef.events;
export type MdRepeatSlots = typeof __propDef.slots;
export default class MdRepeat extends SvelteComponentTyped<MdRepeatProps, MdRepeatEvents, MdRepeatSlots> {
}
export {};
