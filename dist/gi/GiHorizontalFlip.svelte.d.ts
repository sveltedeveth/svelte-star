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
export type GiHorizontalFlipProps = typeof __propDef.props;
export type GiHorizontalFlipEvents = typeof __propDef.events;
export type GiHorizontalFlipSlots = typeof __propDef.slots;
export default class GiHorizontalFlip extends SvelteComponentTyped<GiHorizontalFlipProps, GiHorizontalFlipEvents, GiHorizontalFlipSlots> {
}
export {};
