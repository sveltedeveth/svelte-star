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
export type FaSlideshareProps = typeof __propDef.props;
export type FaSlideshareEvents = typeof __propDef.events;
export type FaSlideshareSlots = typeof __propDef.slots;
export default class FaSlideshare extends SvelteComponentTyped<FaSlideshareProps, FaSlideshareEvents, FaSlideshareSlots> {
}
export {};
