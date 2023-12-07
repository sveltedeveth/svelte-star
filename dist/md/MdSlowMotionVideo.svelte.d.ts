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
export type MdSlowMotionVideoProps = typeof __propDef.props;
export type MdSlowMotionVideoEvents = typeof __propDef.events;
export type MdSlowMotionVideoSlots = typeof __propDef.slots;
export default class MdSlowMotionVideo extends SvelteComponentTyped<MdSlowMotionVideoProps, MdSlowMotionVideoEvents, MdSlowMotionVideoSlots> {
}
export {};
