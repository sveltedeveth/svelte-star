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
export type MdGifProps = typeof __propDef.props;
export type MdGifEvents = typeof __propDef.events;
export type MdGifSlots = typeof __propDef.slots;
export default class MdGif extends SvelteComponentTyped<MdGifProps, MdGifEvents, MdGifSlots> {
}
export {};
