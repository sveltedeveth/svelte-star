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
export type MdSurroundSoundProps = typeof __propDef.props;
export type MdSurroundSoundEvents = typeof __propDef.events;
export type MdSurroundSoundSlots = typeof __propDef.slots;
export default class MdSurroundSound extends SvelteComponentTyped<MdSurroundSoundProps, MdSurroundSoundEvents, MdSurroundSoundSlots> {
}
export {};
