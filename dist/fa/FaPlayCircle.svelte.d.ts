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
export type FaPlayCircleProps = typeof __propDef.props;
export type FaPlayCircleEvents = typeof __propDef.events;
export type FaPlayCircleSlots = typeof __propDef.slots;
export default class FaPlayCircle extends SvelteComponentTyped<FaPlayCircleProps, FaPlayCircleEvents, FaPlayCircleSlots> {
}
export {};
