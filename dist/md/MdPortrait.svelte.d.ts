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
export type MdPortraitProps = typeof __propDef.props;
export type MdPortraitEvents = typeof __propDef.events;
export type MdPortraitSlots = typeof __propDef.slots;
export default class MdPortrait extends SvelteComponentTyped<MdPortraitProps, MdPortraitEvents, MdPortraitSlots> {
}
export {};
