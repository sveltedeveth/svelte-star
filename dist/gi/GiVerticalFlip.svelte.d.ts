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
export type GiVerticalFlipProps = typeof __propDef.props;
export type GiVerticalFlipEvents = typeof __propDef.events;
export type GiVerticalFlipSlots = typeof __propDef.slots;
export default class GiVerticalFlip extends SvelteComponentTyped<GiVerticalFlipProps, GiVerticalFlipEvents, GiVerticalFlipSlots> {
}
export {};
