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
export type MdTouchAppProps = typeof __propDef.props;
export type MdTouchAppEvents = typeof __propDef.events;
export type MdTouchAppSlots = typeof __propDef.slots;
export default class MdTouchApp extends SvelteComponentTyped<MdTouchAppProps, MdTouchAppEvents, MdTouchAppSlots> {
}
export {};
