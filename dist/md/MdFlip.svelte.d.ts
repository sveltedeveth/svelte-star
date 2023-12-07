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
export type MdFlipProps = typeof __propDef.props;
export type MdFlipEvents = typeof __propDef.events;
export type MdFlipSlots = typeof __propDef.slots;
export default class MdFlip extends SvelteComponentTyped<MdFlipProps, MdFlipEvents, MdFlipSlots> {
}
export {};
