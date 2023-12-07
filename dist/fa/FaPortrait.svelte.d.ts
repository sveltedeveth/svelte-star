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
export type FaPortraitProps = typeof __propDef.props;
export type FaPortraitEvents = typeof __propDef.events;
export type FaPortraitSlots = typeof __propDef.slots;
export default class FaPortrait extends SvelteComponentTyped<FaPortraitProps, FaPortraitEvents, FaPortraitSlots> {
}
export {};
