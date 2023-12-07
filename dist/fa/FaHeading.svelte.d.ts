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
export type FaHeadingProps = typeof __propDef.props;
export type FaHeadingEvents = typeof __propDef.events;
export type FaHeadingSlots = typeof __propDef.slots;
export default class FaHeading extends SvelteComponentTyped<FaHeadingProps, FaHeadingEvents, FaHeadingSlots> {
}
export {};
