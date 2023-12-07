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
export type FaGgCircleProps = typeof __propDef.props;
export type FaGgCircleEvents = typeof __propDef.events;
export type FaGgCircleSlots = typeof __propDef.slots;
export default class FaGgCircle extends SvelteComponentTyped<FaGgCircleProps, FaGgCircleEvents, FaGgCircleSlots> {
}
export {};
