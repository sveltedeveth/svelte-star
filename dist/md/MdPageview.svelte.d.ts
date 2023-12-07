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
export type MdPageviewProps = typeof __propDef.props;
export type MdPageviewEvents = typeof __propDef.events;
export type MdPageviewSlots = typeof __propDef.slots;
export default class MdPageview extends SvelteComponentTyped<MdPageviewProps, MdPageviewEvents, MdPageviewSlots> {
}
export {};
